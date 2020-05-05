const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

// 设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.get("/",(req,res)=>{
    res.json({code:200,result:"后台数据"})
})

// 这里是后台数据
const Tasks = [{
    id: "task01",
    taskimg: "https://img.jianzhimao.com/static/m3/static/css/img/task/icon_register.png?v=43c1aa1",
    title: "【爱调查】注册招募",
    money: "2.9元",
    remain: "336",
    time: "5小时前",
    examine: "22小时"
  },
  {
    id: "task02",
    taskimg: "https://img.jianzhimao.com/static/m3/static/css/img/task/icon_other.png?v=ff3d8c4",
    title: "聚看点阅读交章",
    money: "1.4元",
    remain: "19",
    time: "8小时前",
    examine: "29小时"
  },
  {
    id: "task03",
    taskimg: "https://img.jianzhimao.com/static/m3/static/css/img/task/icon_spread.png?v=73fa6fb",
    title: "分享文章至微信朋友圈",
    money: "0.4元",
    remain: "132",
    time: "2020-04-19",
    examine: "23小时"
  },
  {
    id: "task04",
    taskimg: "https://img.jianzhimao.com/static/m3/static/css/img/task/icon_register.png?v=43c1aa1",
    title: "平安口袋银行拉新注册",
    money: "6.5元",
    remain: "112",
    time: "2020-04-17",
    examine: "10小时"
  },
  {
    id: "task05",
    taskimg: "https://img.jianzhimao.com/static/m3/static/css/img/task/icon_spread.png?v=73fa6fb",
    title: "本色世界",
    money: "5.4元",
    remain: "24",
    time: "2020-04-19",
    examine: "11小时"
  },
  {
    id: "task06",
    taskimg: "https://img.jianzhimao.com/static/m3/static/css/img/task/icon_register.png?v=43c1aa1",
    title: "高佣联盟APP注册",
    money: "2.39元",
    remain: "118",
    time: "2020-04-08",
    examine: "20小时"
  }
]

app.get('/home', (req, res) => {
    //req: 请求对象
    //res: 响应对象
    //将数据响应给前端
    res.json(Tasks);
})

// 密钥
const secret = "iloveyoumeinv";

var userlists = [];

app.get("/login",(req,res)=>{
    // 1.获取前台用户名密码，判断验证
    let {username,password} = req.query;
    let data = req.query;
    data['iat'] = Math.floor(Date.now() / 1000 )-30;
    // 数据里面的用户名与前台登录用户名相同 返回-1失败
    let passindex = userlists.findIndex(value=> value.username == username);
    if(passindex != "-1"  && password == userlists[passindex].password){
        //令牌
        let token = jwt.sign(data,secret);
        res.json({code:200,result:{token}})
    }else{
        res.json({code:201,result:"请求数据失败"})
    }
})

// 注册功能
app.get("/register",(req,res)=>{
    userlists.push(req.query)
    res.json({code:200,result:"注册成功"})
})

app.use((req,res,next)=>{
    try {
        var tokendata = jwt.verify(req.query.token,secret);
        let passindex = userlists.findIndex(value=> value.username == tokendata.username);
        if(passindex != "-1"){
            next(); //跳出路由
        }else{
            res.json({code:201,result:"请求数据失败"})
        }
    } catch(err) {
        res.json({code:201,result:"请求数据失败"})
    }
})


// 这里返回用户的用户信息
app.get("/getdata",(req,res)=>{
    res.json({code:200,result:{
        name:"user"
    }})
})

app.listen(3000,()=>{
    console.log("请访问：http://192.168.43.169:3000");
})