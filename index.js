// 사용 모듈 로드
var express = require('express'); // 웹서버 사용 .
var app = express();

var fs = require('fs'); // 파일 로드 사용.
var path = require('path');
var mysql = require('mysql');
var dbconfig   = require('./config/database.js');
var conn = mysql.createConnection(dbconfig);
var bodyParser = require('body-parser');
const crypto = require('crypto');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

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

  conn.query('SELECT * from ty_login', function(err, rows) {
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
    
   
    
    conn.query('SELECT pwd, salt from ty_login', function(err, rows) {
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

app.post('/adminList', function(req, res){       
    conn.query('SELECT ty_id, title, subtitle, cont, start_dt, end_dt from ty_career', function(err, rows) {
        if(err){
            throw err;
        }else{
            res.send(rows);
        }
    });
});


app.post('/careerMod', function(req, res){
 
    var ty_id = req.body.data;
    
    res.send(ty_id);
});

app.post('/careerModData', function(req, res){    
    
    var ty_id = req.body.data;
    
    conn.query('SELECT ty_id, title, subtitle, start_dt, end_dt, cont from ty_career where ty_id = '+ty_id, function(err, rows) {
        if(err){
            throw err;
        }else{
            res.send(rows);
        }
    });

});

app.post('/careerAdd', function(req, res){
    var title = req.body.title;
    var subtitle = req.body.subtitle;
    var start_dt = req.body.start_dt;
    var end_dt = req.body.end_dt;
    var cont = req.body.cont;
    
    var params = [title,subtitle,start_dt,end_dt,cont];
   
    /*console.log(title);
    console.log(subtitle);
    console.log(start_dt);
    console.log(end_dt);
    console.log(cont);*/
    
    var sql = 'insert into ty_career(title, subtitle, start_dt, end_dt, cont) values(?,?,?,?,?)'
    
   // var sql = 'insert into ty_career(title) values("1")'
    
    conn.query(sql, params, function(err){
        if(err){
            console.log(err);
            res.send('N');
        }else{
            res.send('Y');
        }
    });
   
});

app.post('/careerModReal', function(req, res){
    var ty_id = req.body.ty_id;
    var title = req.body.title;
    var subtitle = req.body.subtitle;
    var start_dt = req.body.start_dt;
    var end_dt = req.body.end_dt;
    var cont = req.body.cont;
    
    var params = [title,subtitle,start_dt,end_dt,cont];
   
    /*console.log(title);
    console.log(subtitle);
    console.log(start_dt);
    console.log(end_dt);
    console.log(cont);*/
    
    var sql = 'update ty_career set title = ?, subtitle = ?, start_dt = ?, end_dt = ?, cont = ? where ty_id = ' + ty_id;
    
    //console.log("sql : "+sql);
    
   // var sql = 'insert into ty_career(title) values("1")'
    
    conn.query(sql, params, function(err){
        if(err){
            console.log(err);
            res.send('N');
        }else{
            res.send('Y');
        }
    });
   
});

/*app.post('/careerDel', function(req, res){
    var ty_id = req.body.data;
    
    console.log(ty_id);
    
    var sql = 'delete from ty_career where ty_id = ' + ty_id;
    
    conn.query(sql, params, function(err){
        if(err){
            console.log(err);
            res.send('N');
        }else{
            res.send('Y');
        }
    });
   
});*/

app.post('/careerDel', function(req, res){
 
    var ty_id = req.body.data;
    
    var sql = 'delete from ty_career where ty_id = ' + ty_id;
    
    conn.query(sql, function(err){
        if(err){
            console.log(err);
            res.send('N');
        }else{
            res.send('Y');
        }
    });
    
    //res.send(ty_id);
});
