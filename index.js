// 사용 모듈 로드
var express = require('express'); // 웹서버 사용 .
var app = express();
var fs = require('fs'); // 파일 로드 사용.
var path = require('path');

app.use(express.static(path.join(__dirname,'/')));

// 포트 설정
app.listen(3000, function () {
    console.log('Server Start .');
});

// 라우팅 설정
app.get('/', function (req, res) { // 웹서버 기본주소로 접속 할 경우 실행 . ( 현재 설정은 localhost 에 3303 port 사용 : 127.0.0.1:3303 )
    fs.readFile('main.html', function (error, data) { // index.html 파일 로드 .
        res.writeHead(200, { 'Content-Type': 'text/html' }); // Head Type 설정 .
        res.end(data); // 로드 html response .
    });
});
