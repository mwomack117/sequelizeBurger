// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Burger.findAll({}).then(function (dbburger) {
        // We have access to the todos as an argument inside of the callback function
        res.render("index", {burgers: dbburger});
    });
});

    // GET route for getting all of the burgers
    app.get("/api/burgers", function (req, res) {
        // findAll returns all entries for a table when used with no options
        db.Burger.findAll({}).then(function (dbburger) {
            // We have access to the todos as an argument inside of the callback function
            res.json(dbburger);
        });
    });

    // POST route for saving a new todo
  app.post("/api/burgers", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(dbburger) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbburger);
    });
  });

  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.send(data);
    })
  } )




}