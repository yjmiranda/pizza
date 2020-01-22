const express = require("express");
const router = express.Router();
const pizza = require("../models/pizza.js");

router.get("/", function(req, res){
    pizza.selectAll(function(data){
        var handlerbarsObject ={
            pizzas: data
        };

        console.log(handlerbarsObject);
        res.render("index", handlerbarsObject);
    });
});

router.put("/api/pizzas/:id", function(req, res){
    pizza.updateOne("devoured", req.body.devoured, "id", req.params.id, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.post("/api/pizzas", function(req, res){
    pizza.isertOne("pizza_name", req.body.pizza_name, function(data){
        res.json(data);
    })
});

module.exports = router;