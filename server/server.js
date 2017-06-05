const Koa = require('koa')
let app = new Koa()
const serve = require('koa-static')
var http = require('http')
var https = require('https')
let router = require('koa-router')()
var bodyParser = require('koa-bodyparser')
var cors = require('koa-cors')
var fs = require('fs')
var url = require('url')
var path = require('path')
var forceSSL = require('koa-force-ssl')
const querystring = require('querystring')

const PORT = process.env.PORT || 3000

router.get('/',
    async function(next) {
        console.log('../index.html')
        this.body = fs.readFileSync('../index.html', 'utf8')
    }
)

app.use(bodyParser())
app.use(cors())
app.use(router.routes())
app.use(serve('../static'), { hidden: true })

app.listen(PORT)

console.log('Server is listening on', PORT + '.')
