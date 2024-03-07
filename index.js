const http = require('http')

const server = http.createServer((req,res) => {
    const url = req.url
    console.log(url)
    console.log('Bir istek gonderildi')

    if(url === "/index"){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h2>Index Sayfasi</h2>')
    }else if(url === "/hakkimda"){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h2>Hakkimda Sayfasi</h2>')
    }else if(url === "/iletisim"){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<h2>Iletisim Sayfasi</h2>')
    }else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.write('<h2>Hata 404</h2>')
    }

    res.write('Merhaba')
    res.end()

})


const port = 5000
server.listen(port, () => {
    console.log(`Sunucu ${port} portunda baslatildi`)
})