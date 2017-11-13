var fs = require('fs')
var path = require('path')

module.exports = function (dir, filteradd, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filteradd
    })

    callback(null, list)
  })
}
