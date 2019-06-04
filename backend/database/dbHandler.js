var mongoose = require('mongoose')

exports.connect2db = function (dbName) {
  mongoose.connect('mongodb://localhost/' + dbName)

  var db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Connected to (' + dbName + ') database!')
  })
}
