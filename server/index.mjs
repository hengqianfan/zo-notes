// 导入 http 模块
import http from 'node:http'
// 
import path from 'node:path';


import express from 'express'

const port = 8090


const app = express()

//开放跨域请求
app.use(function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "*");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method == "OPTIONS") res.sendStatus(200); //让options尝试请求快速结束
    else next();
});


app.use(express.json());

// let filePath = path.join(__dirname, '../');

// let root = filePath + `root-docs/`

// console.log(filePath);

// 创建路由
app.post('/edit', (req, res) => {
    console.log(req.body);

    res.end('已接受')
})
// 监听（启动服务）
app.listen(port, () => {
    console.log(`服务已经启动.....http://127.0.0.1:${port}`);
})