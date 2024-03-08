const express = require('express')
const path = require('path')
const app = express()
const port = 3070
const methodOverride= require("method-override")
const createError = require('http-errors');


app.set('view engine', 'ejs');
app.use(express.static('public'))
//app.set('views', path.join(__dirname, './views'));
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }));


const otherRoutes = require("./routes/other.routes.js")
const authenticationRoutes = require("./routes/authentication.routes.js")
const adminRoutes = require("./routes/admin.routes.js")


app.use("/", otherRoutes)
app.use("/authentication",authenticationRoutes)
app.use("/products",adminRoutes)

/*app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
app.use((err, req, res, next) => {
    console.error(err.stack);
  
    res.status(500).render('error', {
      message: 'Esta vista no existe',
      error: err,
      path: req.path,
    });
  });*/
  app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(port,()=> console.log(`http://localhost:${port}`))
