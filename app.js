var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
		var url=req.url;
		if (url==="/") {
			fs.readFile("index.html",function(err,data){
				if (err) {
					res.write("index.html not found");
				}
				else
				{
					res.writeHead(200,{'Content-Type':'text/html'});
					res.write(data);
					res.end();
				}
			});
		}
}).listen(process.env.PORT ||3000, function () { 
    console.log("SERVER STARTED PORT: 3000"); 
}); 
