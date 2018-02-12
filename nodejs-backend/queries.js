var express = require("express");
var mysql = require('mysql');
var moment = require('moment');
var request = require('request');
var queryString = require('querystring');
var app = express();

/* Description of variables in the pool object:
host- IP address/name of localhost or DB Server.
user- username used to connect to DB.
password- password used to connect to DB.
database- database name to store tables on DB.
debug- true: enables debug messages. false: disables it.
connectionLimit- number of simultaneous connections to the DB.
*/
var pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: '',
  password: '',
  database: '',
  debug: false
});

function getLicensePlateData(req, res) {
  var license = req.params.license;
  var sql = "select * from LicenseData where license=?";
  var inserts = [license];
  var queryString = mysql.format(sql, inserts);
  console.log(queryString);
  console.log("Connected via getLicensePlateData!");
  pool.getConnection(function (err, connection) {
    connection.query(queryString, function (err, rows) {
      connection.release();
      if (!err) {
        res.status(200).json(rows);
      }
    });
  });
}

function postData(req, res) {
  var image = req.body.image;
  var m1 = parseFloat(req.body.m1);
  var m2 = parseFloat(req.body.m2);
  var m3 = parseFloat(req.body.m3);
  var m4 = parseFloat(req.body.m4);
  var timeStamp = moment().format("YYYY-MM-DD HH:mm:ss");
  var sql = "insert into data (image, m1, m2, m3, m4, times) values(?,?,?,?,?,?)";
  var inserts = [image, m1, m2, m3, m4, timestamp];
  var queryString = mysql.format(sql, inserts);
  console.log("Connected via postData!");
  pool.getConnection(function (err, connection) {
    connection.query(queryString, function (err, rows) {
      connection.release();
      if (!err) {
        res.status(200).json(rows);
      }
    });
  });
  var key = '';
  request({
      uri: 'http://api.thingspeak.com:80',
      body: {
        'field1': m1,
        'field2': m2,
        'field3': m3,
        'field4': m4,
        'field5': 12.93496,
        'field6': 79.14688,
        'key': key
      },
      headers: {
        "Content-typZZe": "application/x-www-form-urlencoded",
        "Accept": "text/plain"
      },
      method: 'POST'
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body)
      }
    },
  );
  var secret = '';
}

module.exports = {
  postData: postData,
  getLicensePlateData: getLicensePlateData
};