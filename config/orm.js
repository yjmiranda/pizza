const connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableName, cb){
        connection.query(
            "SELECT * FROM ??;",
            [tableName],
            function(err, res){
                if (err) throw err;
                cb(res);
            }
        );
    },
    insertOne: function(table, column, value, cb){
        connection.query(
            "INSERT INTO ?? (??) VALUES(?)",
            [table, column, value],
            function(err, res){
                if (err) throw err;
                cb(res);
            }
        );
    },
    updateOne: function(table, columnToUpdate, updatedValue, identifierColumn, identifier, cb){
        connection.query(
            "UPDATE ?? SET ?? = ? WHERE ?? = ?",
            [table, columnToUpdate, updatedValue, identifierColumn, identifier],
            function(err, res){
                if (err) throw err;
                cb(res);
            }
        );
    },
    deleteOne: function(table, identifierColumn, identifier, cb){
        connection.query(
            "DELETE FROM ?? WHERE ?? = ?",
            [table, identifierColumn, identifier],
            function(err, res){
                if(err) throw err;
                cb(res);
            }
        );
    }
};

module.exports = orm;