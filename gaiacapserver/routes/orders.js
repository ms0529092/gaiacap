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
router.get('/', function (req, res, next) {
  res.send('訂單頁面哦哦哦哦哦');
});

router
  .route("/:sid")
  .get(function (req, res) {//讀這個使用者所有訂單
    console.log(req.params.sid);
    connection.query("select * from gaiaorder WHERE user_id=?",req.params.sid, function (error, rows) {
      //console.log(rows);
      if (error) throw error;
      res.json(rows);
    })
  });
router
  .route("/add")
  .put(function (req, res) {//新增訂單
    var total_value = req.body;
    var queryString = 'INSERT INTO `gaiaorder`( `user_id`, `create_time`, `user_name`, `user_address`, `user_mobile`, `user_email`, `order_type`, `order_market`, `order_store`, `order_time`, `order_method`) VALUES ';
    queryString += "(";
    queryString += "'"+total_value['u_id']+"',"
    queryString += "'"+total_value['create_time']+"',"
    queryString += "'"+total_value['user_name']+"',"
    queryString += "'"+total_value['user_address']+"',"
    queryString += "'"+total_value['mobile']+"',"
    queryString += "'"+total_value['email']+"',"
    queryString += "'"+total_value['order_type']+"',"
    queryString += "'"+total_value['order_market']+"',"
    queryString += "'"+total_value['order_store']+"',"
    queryString += "'"+total_value['order_time']+"',"
    queryString += "'"+total_value['order_method']+"'"
    queryString += ")";
                            
    connection.query(queryString, function (error, rows) {
      //console.log(rows);
      if (error) throw error;
      res.json(rows);
      // console.log(rows.insertId);
    })
  });

  router
  .route("/detail")
  .put(function (req, res) {//新增訂單商品
    var total_value = req.body;
    var queryString = 'INSERT INTO `gaiaorder_detail` (`order_sid`, `com_id`, `com_product`) VALUES ';
    queryString +="('"+ total_value['order_id']+"','";
    queryString += total_value['proid']+"','";
    queryString += total_value['value']+"')";;
    
    connection.query(queryString, function (error, rows) {
      //console.log(rows);
      if (error) throw error;
      res.json(rows);
    })
  });

  router
  .route("/detail/:id")
  .get(function (req, res) {//讀單筆訂單
    
    var queryString = 'SELECT * FROM `gaiaorder` WHERE sid='+req.params.id;
    console.log(queryString);
    connection.query(queryString, function (error, rows) {
      //console.log(rows);
      if (error) throw error;
      res.json(rows);
    })
  })

  router
  .route("/detailall/:id")
  .get(function (req, res) {//讀單筆訂單所有資料
    
    var queryString = 'SELECT * FROM `gaiaorder_detail` WHERE order_sid='+req.params.id;
    console.log(queryString);
    connection.query(queryString, function (error, rows) {
      //console.log(rows);
      if (error) throw error;
      res.json(rows);
    })
  });

module.exports = router;
