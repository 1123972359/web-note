const express = require('express')
const bodyParser = require('body-parser')
const app = express();
app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        " Origin, X-Request-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", " 3.2.1")
    res.header("Content-Type", "application/json;charset=utf-8")
    next();
})

// body
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use(require('./users'))

app.listen(3000, () => {
    console.log('3000 is running')
})