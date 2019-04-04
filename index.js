// 사용 모듈 로드
var express = require('express'); // 웹서버 사용 .
var app = express();
var fs = require('fs'); // 파일 로드 사용.
var path = require('path');
var mysql = require('mysql');
var dbconfig   = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);
var bodyParser = require('body-parser');
const crypto = require('crypto');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/')));
app.use(express.static(path.join('detail','/')));

// 포트 설정
app.listen(80, function () {
    console.log('Server Start .');
});

// 라우팅 설정
app.get('/', function (req, res) { // 웹서버 기본주소로 접속 할 경우 실행 . ( 현재 설정은 localhost 에 3303 port 사용 : 127.0.0.1:3303 )
    fs.readFile('main.html', function (error, data) { // index.html 파일 로드 .
        res.writeHead(200, { 'Content-Type': 'text/html' }); // Head Type 설정 .
        res.end(data); // 로드 html response .
    });
});

app.get('/persons', function(req, res){

  connection.query('SELECT * from ty_login', function(err, rows) {
    if(err) throw err;

    console.log('The solution is: ', rows);
    res.send(rows);
  });
});

app.post('/loginFlag', function(req, res){
 
    var pwd = req.body.data;
    
    /*crypto.randomBytes(64, (err, buf) => {
      crypto.pbkdf2('test', buf.toString('base64'), 102154, 64, 'sha512', (err, key) => {
        console.log('key : ' + key.toString('base64'));
        console.log("passhash : " + pass+key.toString('base64'));
      });
    });*/   //패스워드 키(salt 만들기)
    
   
    
    connection.query('SELECT pwd, salt from ty_login', function(err, rows) {
        if(err){
            throw err;
        }else{
            //console.log('POST Parameter = ' + pwd);
            //console.log('The solution is: ', rows[0].pwd);
            //console.log('The solution is: ', rows[0].salt);
            
            var dbPwd = rows[0].pwd;
            var dbSalt = rows[0].salt;
            
            pwd = crypto.createHash('sha512').update(pwd+dbSalt).digest('base64');
            
            //console.log("1.dbPwd : " + dbPwd);
            //console.log("2.pwd : " + pwd);
            
            if(dbPwd===pwd){
                res.send('Y');
            }else{
                res.send('N');
            }
        }
    });
});

app.post('/careerAdd', function(req, res){
 
    
});