const http = require('http')
const fs = require('fs') 
//library that has all the file handling capabilities
const port = 3000


const server = http.createServer(function(req, res) {
    //200 is status code that means that the page rendered properly 
    //(e.g. as opposed to 404)
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data){
      if (error) {
       res.writeHead(404)
    res.write('Error: File not found!')
   } else {
       res.write(data) //data is all the info inside the html
   }
   res.end()
  })
})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})