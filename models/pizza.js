const orm = require("../config/orm.js");

var pizza = {
    selectAll: function(cb){
        orm.selectAll("pizzas", function(res){
            cb(res);
        });
    },
    isertOne: function(column, value, cb){
        orm.insertOne("pizzas", column, value, function(res){
            cb(res);
        });
    },
    updateOne: function(columnToUpdate, updatedValue, identifierColumn, identifier, cb){
        orm.updateOne("pizzas",columnToUpdate, updatedValue, identifierColumn, identifier, function(res){
            cb(res);
        });
    }
};

module.exports = pizza;