const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter a Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</head>')
        res.write('</html>')
        return res.end()
    }
    // process.exit()
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My Node Page</title></head>')
    res.write('<body><h1> Hello from My Node Server </h1></body>')
    res.write('</html>')
    res.end()
});

server.listen(3000);