const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx =>  {
  const url = ctx.request.url

  if(url === '/index' || url === '/'){
    ctx.body = '<h2>Index Sayfasi</h2>'
  }else if(url === '/hakkimda'){
    ctx.body = '<h2>Hakkimda Sayfasi</h2>'
  }else if(url === '/iletisim'){
    ctx.body = '<h2>Iletisim Sayfasi</h2>'
  }else{
    ctx.status = 404
    ctx.body = '<h2>Sayfa Bulunamadi!</h2>'
  }

});

app.listen(3000);