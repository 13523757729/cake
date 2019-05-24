//1:复制服务器端模块
//2:引入第三方模块
//  mysql/express/
const express = require("express");
const session=require("express-session");
const cors=require("cors");
// 2.1 引express-session组件
// 引入路由模块
const mysql=require("mysql");
const pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"cake"
});
//4:创建express对象
var server = express(); 
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}))
//5:绑定监听端口 3000
server.listen(3200);
// 项目中所有的图片都是放在服务器端
server.use(express.static("public"));
// 4.1 配置
server.use(session({
  secret:"128位字符串",   //配置加密的秘钥
  resave:true,          //每次请求是否更新数据
  saveUninitialized:true //保存初始化数据
}))
// 创建首页列表图
server.get("/getindexList",(req,res)=>{
  var sql="select id,img_url,title,price from cake_index_product";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
})
// 创建蛋糕列表
server.get("/getproducts",(req,res)=>{
  var sql="select id,img_url,title,price from cake_product";
  pool.query(sql,(err,result)=>{
   if(err) throw err;
   res.send(result); 
  });
});
// 搜索列表
server.get("/searchList",(req,res)=>{
  var key=req.query.key;
  // console.log(key);
  var sql=`select id,price,title,salesvolume,img_url from cake_product where title like "%${key}%"`
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,data:result});
  });
})
// 插入用户列表
server.get("/insuser",(req,res)=>{
  var name=req.query.name;
  var photo=req.query.photo;
  // console.log(photo);
  var gender=req.query.gender;
  var sql="select id from cake_user where name=? AND photo=? AND gender=?";
  pool.query(sql,[name,photo,gender],(err,result)=>{
    // [name,photo,tel,gender],
    if(err) throw err;
    res.send(result);
    // console.log(result);
    // console.log(result.length);
    if(result.length<1){
      var sql1="insert into cake_user set name=?,photo=?,gender=?";
      pool.query(sql1,[name,photo,gender],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
          pool.query(sql,[name,photo,gender],(err,result)=>{
            if(err) throw err;
            res.send(result);
          })
        }
      })
    }
  })
});
// 添加地址
server.get("/Inseaddr",(req,res)=>{
  var userId=req.query.userId;
  var obj=req.query;
  var obj2={
    "收货人姓名":obj.userName,
    "收货人电话":obj.tel,
    "省":obj.province,
    "市":obj.city,
    "地区":obj.district,
    "详细地址":obj.addr,
  };
  for(var key in obj2){
    if(obj2[key]==""){
      res.send({code:-1,msg:`${key}不能为空`});
      return;
    }
  }
  // console.log(obj2[key]);
  var sql="INSERT INTO cake_addr SET userName=?,tel=?,addr=?,province=?,city=?,district=?,userId=?";
  pool.query(sql,[obj.userName,obj.tel,obj.addr,obj.province,obj.city,obj.district,userId],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"成功"});
    }else{
      res.send({code:0,msg:"失败"});
    }
  })
})
// 搜索地址
server.get("/getaddrList",(req,res)=>{
  var userId=req.query.userId;
  var sql="select id,userName,tel,province,city,district,addr from cake_addr where userId=? order by id DESC";
  pool.query(sql,[userId],(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
})
// 搜索地址
server.get("/getaddr",(req,res)=>{
  var id=req.query.id;
  // console.log(id);
  var sql="select id,userName,tel,province,city,district,addr from cake_addr where id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    res.send(result);
  });
})
// 修改地址
server.get("/updaddr",(req,res)=>{
  var id=req.query.id;
  var obj=req.query;
  var obj2={
    "收货人姓名":obj.userName,
    "收货人电话":obj.tel,
    "省":obj.province,
    "市":obj.city,
    "地区":obj.district,
    "详细地址":obj.addr,
  };
  for(var key in obj2){
    if(obj2[key]==""){
      res.send({code:-1,msg:`${key}不能为空`});
      return;
    }
  }
  var sql="update cake_addr set userName=?,tel=?,province=?,city=?,district=?,addr=? where id=?"
  pool.query(sql,[obj.userName,obj.tel,obj.province,obj.city,obj.district,obj.addr,id],(err,result)=>{
    if(err) throw err;
    // console.log(result);
  });
});
// 删除地址
server.get("/deladdr",(req,res)=>{
  var id=req.query.id;
  var sql="delete from cake_addr where id=?"
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err
    res.send({code:1,msg:"删除成功"});
  });
})
// 创建详情页
server.get("/getdetails",(req,res)=>{
  var id=req.query.id;
  var option={
    data:{},
    pic:{}
  };
  var sql="select id,title,price,salesvolume from cake_product where id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    option.data=result;
  });
  var sql1="select top_pic,bottom_pic from cake_pic where productid=?";
  pool.query(sql1,[id],(err,result)=>{
    if(err) throw err;
    option.pic=result;
    res.send(option)
    // console.log(option);
  })
});
// 创建购物车
server.get("/getcart",(req,res)=>{
  var uid=req.query.userId;
  console.log(uid);
  var id=req.query.id;
  var sql1="select id, img_url,title,price from cake_product where id=?";
  pool.query(sql1,[id],(err,result)=>{
    if(err) throw err;
    // console.log(result);
    var img_url=result[0].img_url;
    var title=result[0].title;
    var price=result[0].price;
    // console.log(img_url,title,price);
    var sql="insert into cake_cart set img_url=?,title=?,price=?,productId=?,userId=?";
    pool.query(sql,[img_url,title,price,id,uid],(err,result)=>{
      if(err) throw err;
      if(result.affectedRows>0){
        res.send({code:1,msg:"成功"})
      }
    });
  })
});
// 检索购物车
server.get("/searcart",(req,res)=>{
  var uid=req.query.userId;
  var sql2="select id,img_url,title,price from cake_cart where userId=? ORDER BY id DESC";
  pool.query(sql2,[uid],(err,result)=>{
    if(err) throw err;
      res.send(result);
    });
});