var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response) {
  var path = url.parse(request.url).pathname;
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head><title>GitOps On Amazon EKS</title><style>body { background-color: cyan; }</style></head>");
  response.write("<body>");
  response.write("<h1 style=\"text-align:center\">ArgoCD on IMED!!</h1>");
  response.write("</body>");
  response.write("</html>");
  response.end();
});
server.listen(8082);
