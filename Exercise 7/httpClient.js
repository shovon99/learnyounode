var http = require('http')

http.get(process.argv[2], function (ans) {
  
  ans.on('data', console.log)
  
  ans.setEncoding('utf8')
  ans.on('error', console.error)

  
}).on('error', console.error)
