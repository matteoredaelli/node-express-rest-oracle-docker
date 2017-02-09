var oracledb = require('oracledb');
var config_db_patriot = require('./config/db_patriot.js');

exports.bi_messages = function (req, res) {
    select_sql("select * from bi_messages where active=1", req, res);
}

exports.dwh_status = function (req, res) {
    select_sql("select * from dwh_status", req, res);
}

exports.dual = function (req, res) {
    select_sql("select * from dual", req, res);
}

select_sql = function (sql_statement, req, res) {
    "use strict";

    oracledb.getConnection('patriot_pool', function (err, connection) {
        if (err) {
            // Error connecting to DB
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to DB",
                detailed_message: err.message
            }));
            return;
        }

        connection.execute(sql_statement, {}, {
            outFormat: oracledb.OBJECT // Return the result as Object
        }, function (err, result) {
            if (err) {
                res.set('Content-Type', 'application/json');
                res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting db pool",
                    detailed_message: err.message
                }));
            } else {
                res.contentType('application/json').status(200);
                res.send(JSON.stringify(result.rows));
            }
            // Release the connection
            connection.release(
                function (err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log("Connection released");
                    }
                });
        });
    });
};

var patriotPoolPromise = oracledb.createPool(config_db_patriot);

Promise.all([patriotPoolPromise])
  .then(function(pools) {
    console.log(pools[0].poolAlias); // 'patriot'
  })
  .catch(function(err) {
      console.log(err);
  })
