var express = require('express');
var mysql = require("mysql");
var router = express.Router();

//建立連線
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'whale',
  password: 'admin',
  database: 'gaiacap'
});
// connection.connect();
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// connection.end();
//建立連線

/* GET users listing. */
router.route("/session")
  .get(function (req, res) {//讀會員資料

    connection.query("select * from gaiauser", function (error, rows) {
      if (error) throw error;
      res.json(rows);
    })
  })

  .post(function (req, res) {//登入
    var email = req.body.email;
    var pwd = req.body.pwd;

    var warray = req.body.warray;
    console.log(warray);

    connection.query("select * from gaiauser WHERE email=? AND u_pwd=?", [email, pwd], function (error, rows) {

      if (error) throw error;
      res.json(rows);
      //select * from gaiauser where email=? AND u_pwd=?", [req.params.email, req.params.pwd],
    })
  })

  .put(function (req, res) {//新增會員資料
    var user_total = req.body;
    var queryUser = "INSERT INTO `gaiauser`(`u_id`, `u_pwd`, `email`, `mobile`) VALUES ";
    queryUser += "('" + user_total['u_id'] + "','" + user_total['u_pwd'] + "','" + user_total['email'] + "','" + user_total['mobile'] + "')";
    console.log(queryUser);
    connection.query(queryUser, function (error) {
      if (error) throw error;
      res.json({ message: "會員註冊成功!!" });
    })
  });

router
  .route("/:id")
  .get(function (req, res) {
    //  res.send("get user " + req.params.id )
    // var _user = users.filter(function(user){//讀一筆資料
    //   return user.id == req.params.id;
    // })
    // res.json(_user);
    connection.query("select * from gaiauser where sid=?", req.params.id, function (error, row) {
      if (error) throw error;
      res.json(row);
    });

  })

  .put(function (req, res) {//修改會員資料
    var user_total = req.body;

    // console.log(user_total['sid']+"___"+user_total['u_id']+"___"+user_total['email']+"___"+user_total['mobile']+"___"+user_total['u_pwd']+"___"+user_total['u_pwd_new']);

    var queryString = " update gaiauser  ";

    queryString += "set u_id='" + user_total['u_id'] + "',";
    queryString += " email='" + user_total['email'] + "',";
    queryString += " mobile='" + user_total['mobile'] + "'";

    if (user_total['u_pwd_new'] != '') {
      queryString += ", u_pwd='" + user_total['u_pwd_new'] + "'";
    }

    queryString += " where sid=" + user_total['sid'] + " and u_pwd='" + user_total['u_pwd'] + "'";

    console.log(queryString);

    connection.query(queryString, function (error) {
      if (error) throw error;
      res.json({ message: "修改成功" });
      //update gaiauser set u_id='whale2' where u_id='whale'
    })


  });

  router
  .route("/like/:id")
  .get(function (req, res) {//讀此ID所有收藏
    
    connection.query("select * from gaiauser_like where sid=?", req.params.id, function (error, row) {
      if (error) throw error;
      res.json(row);
    });

  })

  .put(function (req, res) {//新增收藏
    var total_value = req.body;
    var queryString = "INSERT INTO `gaiauser_like`(`sid`, `com`) VALUES ";
    queryString += "('"+req.params.id+"','"+total_value['proid']+"')" ;

    connection.query(queryString, function (error, row) {
      if (error) throw error;
      res.json({ message: "已成功加入收藏" });
    });

  })
  
  .delete(function (req, res) {//刪除收藏
    //  res.json(users)
    var total_value = req.body;
    // console.log(total_value['proid']);
    var queryString = "DELETE FROM `gaiauser_like` WHERE ";
    queryString += "sid="+ req.params.id + " AND com="+total_value['proid'];

    connection.query(queryString, function (error, rows) {
      //console.log(rows);
      if (error) throw error;
      res.json({ message: "刪除成功" });
    })
  })


  


module.exports = router;
