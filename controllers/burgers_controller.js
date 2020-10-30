//importing
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// ROUTES

        //GET//

router.get("/", function(req, res) {
    console.log("Path Sucessful");
    burger.selectAll((data) => {
        handlebarsObject = {
            burger:data
        };
        console.log("Display Burgers");
        res.render("index", handlebarsObject);
    });
});

        //POST//

router.post("/api/burger", function(req,res) {
    console.log("burger route successful");
    burger.insertOne(["burger_name","devoured"], [req.body["burger_name"], req.body.devoured], (result) => {
        console.log(result);
        res.json(result);
    });
});

        //PUT//

router.put("/api/burger/:id", function(req,res) {
    let burgerId = req.params.burgerId
    let condition = "id = " + burgerId;

    console.log("Burger route successful. ID is " + burgerId);
    console.log("Dev is " + req.body.devoured);

    burger.updateOne(["devoured"], [req.body.devoured], condition, (result) => {
        console.log("First declared callback");
        res.json(result);
    });
});

module.exports = router;