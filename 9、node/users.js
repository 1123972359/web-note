const express = require('express')
const userRouter = express.Router();
const query = require('./db')

userRouter.get('/getUser', (req, res) => {
    const sql = "SELECT * FROM user";
    query(sql, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
});

userRouter.get('/getZzh', (req, res) => {
    const sql = "SELECT * FROM user WHERE name = 'zzh'";
    query(sql, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
});

userRouter.post('/addUser', (req, res) => {
    const name = req.body.name;
    const sql = `INSERT INTO user (name) VALUES ("${name}")`;
    query(sql, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send('添加成功');
        }
    })
});

userRouter.post('/deleteUser', (req, res) => {
    const id = req.body.id;
    const sql = `DELETE FROM user WHERE id = ${id}`;
    query(sql, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send('删除成功');
        }
    })
});

module.exports = userRouter