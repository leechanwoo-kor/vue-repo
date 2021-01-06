// idx.js

var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var app = express()

// DB setting
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect(process.env.MONGO_DB)
var db = mongoose.connection

db.once('open', function (){
  console.log('DB connected')
})

db.on('error', function (err){
  console.log('DB ERROR : ', err)
})

//Other Settings
app.set('view engine', 'ejs')
app.use(express.static(__dirname+'/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))

//Routes
app.use('/', require('./routes/home'))
app.use('/contacts', require('./routes/contacts'))

//Port setting
var port = 8081; // 사용할 포트 번호를 port 변수에 넣습니다.
app.listen(port, function(){ // port변수를 이용하여 8081 포트에 node.js 서버를 연결합니다.
  console.log('server on! http://localhost:'+port); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});
