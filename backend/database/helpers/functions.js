var models = require('../models')

const R = require('ramda')


const updateGraphWithPaymentUnit = payment => balances => {
  const index = R.findIndex((balance) => balance.source == payment.from && balance.target == payment.to, balances)
  if (index == -1) {
    balances.push({source: payment.from, target: payment.to, value: payment.value})
    balances.push({source: payment.to, target: payment.from, value: -payment.value})
  } else {
    const inverseIndex = R.findIndex((balance) => balance.source == payment.to && balance.target == payment.from, balances)
    balances[index].value += payment.value
    balances[inverseIndex].value -= payment.value
  }
  return balances
}

const updateGraph = ({ wisId, payments }) => models.BalanceGraph
  .findOne({ wisId })
  .then((graph) => {

    // Todo: Reduce refactor
    R.pipe(...R.map(updateGraphWithPaymentUnit, payments))(graph.balances)
    return models.BalanceGraph.updateOne({ wisId }, { balances: graph.balances }).exec()
  })

exports.fetchUsers = wisId => models.User.find({ wisId })

exports.addUser = (username, wisId) => models.User
  .findOne({ username, wisId })
  .then(user => {
    if (!user) return new models.User({ username, wisId }).save()
    throw new Error('user Exists Already!')
  })

exports.fetchGraph = wisId => models.BalanceGraph
  .findOne({ wisId })
  .then(graph => {
    if (!graph) return new models.BalanceGraph({ balances: [], wisId }).save()
    return graph
  })

exports.fetchTransactions = wisId => models.Transaction.find({ wisId })

exports.addTransaction = transObj => new models.Transaction(transObj)
  .save()
  .then(updateGraph)
