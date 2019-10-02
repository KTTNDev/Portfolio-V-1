var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//3.่เชื่อมดาต้าเบส
var mongodb = require('mongodb');
var db = require('monk')('localhost:27017/ProjectDB');

//5.Upload file
//ใช้ multer
var multer = require('multer');
//อ้างโฟลเดอร์ กำหนด option ของ multer
var upload = multer({ dest: './public/images' });


//4.การdefine router
var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// 2.มาแก้นามสกุลไฟล์ที่เราจะใช้
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));

//1.นี่คือส่วนที่เรียกใช้ Index คือส่วน Router
app.use('/', indexRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;