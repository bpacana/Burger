// dependencies
var express = require("express");
var router = express.Router();
var db = require("../models/");

// gets all the burgers in the db
router.get("/", function(req, res) {
	db.Burger.findAll()
	.then(function(data) {
		console.log(data);
		return res.render("index", { burgers: data });
	});
});

// adds a burger
router.post("/", function(req, res) {
	console.log(req.body);
	db.Burger.create({
		burger_name: req.body.name
	})
	.then(function() {
		res.redirect("/");
	});
});

// updates a burger entry
router.put("/:id", function(req, res) {
	console.log(req.body);
	db.Burger.update(
		{
			devoured: true
		}, {
			where: {
				id: req.params.id
			}
		}
	).then(function() {
		res.redirect("/");
	});
});

// deletes a burger
router.delete("/:id", function(req, res) {
	db.Burger.destroy(
		{
			where: {
				id: req.params.id
			}
		}
	).then(function() {
		res.redirect("/");
	});
});

module.exports = router;

