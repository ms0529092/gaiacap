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
  res.send('商品頁囉囉囉');
});

router
  .route("/all")
  .get(function (req, res) {//讀所有資料
    //  res.json(users)
    connection.query("select * from gaiacom ", function (error, rows) {
      //console.log(rows);
      if (error) throw error;
      res.json(rows);
    })
  });
router
  .route("/color/all")
  .get(function (req, res) {//讀所有資料
    //  res.json(users)
    connection.query("select * from gaiacom_color ", function (error, rows) {
      //console.log(rows);
      if (error) throw error;
      res.json(rows);
    })
  });
router
  .route("/color/:color")
  .get(function (req, res) {//讀所有資料
    //  res.json(users)
    connection.query("select * from gaiacom WHERE color=?", req.params.color, function (error, rows) {
      //console.log(rows);
      if (error) throw error;
      res.json(rows);
    })
  });

router
  .route("/series/:series")
  .get(function (req, res) {//讀所有資料
    //  res.json(users)
    connection.query("select * from gaiacom WHERE type=?", req.params.series, function (error, rows) {
      //console.log(rows);
      if (error) throw error;
      res.json(rows);
    })
  });


router
  .route("/pro/:sid")
  .get(function (req, res) {//讀單筆
    //  res.json(users)
    connection.query("select * from gaiacom WHERE sid=?", req.params.sid, function (error, rows) {
      //console.log(rows);
      if (error) throw error;
      res.json(rows);
    })
  })



module.exports = router;
