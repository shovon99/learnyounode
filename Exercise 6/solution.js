

var filterFile = require('./filterFile.js')

var directory = process.argv[2]

var filteradd = process.argv[3]

filterFile(directory, filteradd, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
