var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var healthRouter = require("./routes/healthRouter");
var multRouter = require("./routes/multiplicacion");
var dividirRouter = require("./routes/dividir");
var restaRouter = require("./routes/resta");
var restaRouter2 = require("./routes/resta2");
var sumaRouter = require(".apis/helloworld/routes/suma");
var suma2Router = require("./routes/suma2");
var multiplicarRouter = require("./routes/multiplicacion1");


var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/healthCheck", healthRouter);
app.use("/multiplicacion", multRouter);
app.use("/multiplicacion1", multiplicarRouter);
app.use("/suma", sumaRouter);
app.use("/suma2", suma2Router);
app.use('/dividir', dividirRouter);
app.use('/resta', restaRouter);
app.use('/resta2', restaRouter2);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
