var mongoose = require('mongoose')
var Schema = mongoose.Schema


// Schemas
var userSchema = new Schema({
  username: String,
  wisId: String
})

var transSchema = new Schema({
  title: String,
  sources: [{ user: String, value: Number }],
  payments: [{ from: String, to: String, value: Number }],
  wisId: String
})

var balanceGraphSchema = new Schema({
  balances: [{ source: String, target: String, value: Number }],
  wisId: String
})

// Models
exports.User = mongoose.model('User', userSchema)
exports.Transaction = mongoose.model('Transaction', transSchema)
exports.BalanceGraph = mongoose.model('BalanceGraph', balanceGraphSchema)

