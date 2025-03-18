const http = require("http");

// bir http sunucusu oluştur, gelen istekleri karşıla ve cevap ver

const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET")

        // durum kodu ve header ını belirle
        res.writeHead(200, {"content-type": "application.json"});

        // cevap gönder
        res.end(JSON.stringify({ message: "node Server Merhabalar!"}));

});

// port 3001 e gelen istekleri dinle

const port = 3001;
server.listen(port, ()=> {
    console.log(`Server ${port} porta gelen istekleri dinliyor.`);
});
