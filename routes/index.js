var express = require('express');
var router = express.Router();
//6.สิ่งที่มันทำตอนนี้ ต้องการนำข้อมูลจาก DB มาแสดง //ไป copy path จาก app.js
//7.เชื่อมต่อดาต้าเบส
var mongodb = require('mongodb');
var db = require('monk')('localhost:27017/ProjectDB');
//ตอนนี้คือเชื่อมต่อเเล้ว

/* GET home page. */


// จะเพิ่มหน้า ให้มาเพิ่ม route ที่นี่ก่อน ex  เช่น........... หน้า about

router.get('/', function(req, res, next) {
    //8.มาอ้างถึง collecttion ที่ต้องการดึงข้อมูล


    //9.ประกาศตัวแปร เพื่อ get collecttion มาจาก Project ใน mongodb
    var Projects = db.get('Project'); //ในวงเล็บคือ DB
    //10.ใช้ตัว variable Projects แล้วใช้ functions find() เพื่อเรียกข้อมูลทั้งหมด find({},{})คือ
    //เรียกมาทั้งหมดเพราะไม่ได้ประกาศ condition
    //function(err,project)เป็นฟังชั่น callback ถ้าไม่ err ก็ให้เก็บค่าไว้ในproject
    Projects.find({}, {}, function(err, project) {

        //11.พอได้ข้อมูลมาเเล้วส่งไปให้ index พร้อมกับ array มี key:value
        res.render('index', { Projects: project });

    });

});

// 12.หน้า about 
router.get('/about', function(req, res, next) {
    res.send("Hello World NodeJS");
});


// ** res.render คือให้ render หน้านั้น 
// ** res.send ส่งค่านั้นไปแสดง
//13. หน้า  login
router.get('/login', function(req, res, next) {
    res.render('login', {
        username: 'Username',
        password: 'Password'
    });
});

module.exports = router;