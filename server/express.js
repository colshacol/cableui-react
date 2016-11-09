const
  express = require('express'),
  compression = require('compression'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser')

const
  port = process.env.PORT || 8090,
  app = express()

app.use(logger())
app.use(compression(), cookieParser(), bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(/.*\/webpack\.js$/, express.static('./client/public/scripts/webpack.js'))
app.use(/.*\/reset\.css$/, express.static('./client/public/styles/reset.css'))
app.use(/.*\/variables\.css$/, express.static('./client/public/styles/variables.css'))
app.use(/.*\/blur-bg\.jpeg$/, express.static('./client/public/images/blur-bg.jpeg'))
app.use('*', express.static('./client/public'))

app.listen(port, () => console.log(`Listening on http://localhost:${port}.`))
