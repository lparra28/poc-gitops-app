var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response) {
  var path = url.parse(request.url).pathname;
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head><title>My App On Amazon EKS</title><style>body { background-color: cyan; }</style></head>");
  response.write("<body>");
  response.write("<h1 style=\"text-align:center\">AWS CI/CD para EKS!!</h1>");
  response.write("</body>");
  response.write("</html>");
  response.end();
});
server.listen(8082);
