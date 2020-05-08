var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Event.findAll({}).then(function(dbEvents) {
      res.render("index", {
        msg: "Community Events!",
        events: dbEvents
      });
    });
  });

  // Load event page (once made) and pass in an event by id
  app.get("/api/events/:id", function(req, res) {
    db.Event.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbEvent) {
      res.render("event", {
        example: dbEvent
      });
    });
  });

  // Load any??? page and pass in a user by id
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.render("any", {
        user: dbUser
      });
    });
  });

  // Load user login and create page
  app.get("/users", function(req, res) {
    res.render("users");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
