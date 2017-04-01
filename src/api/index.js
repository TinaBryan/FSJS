// This will be the API module
'use strict';

// include the dependency
var express = require('express');

// invoking the TODOs
var todos = require('../../mock/todos.json');

// invoking an express router
var router = express.Router();

// building the first route using express GET method
router.get('/todos', function(req, res) {
  Todo.find({}, function(err, todos) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
		// This is a callback function of response which takes a string
		// Express will accept a JSON object by passing on into send method
		res.json({todos: todos});
	});
});


// TODO: Add POST route to create new entries
router.post('/todos', function(req, res) {
  var todo = req.body;
  Todo.create(todo, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'todo': todo, message: 'Todo Created' });
  });
});

// TODO Add PUT route to update existing entries
router.put('/todos/:id', function(req, res) {
  var id = req.params.id;
  var todo = req.body;
  if (todo && todo._id !== id) {
    return res.status(500).json({ err: "Ids don't match!" });
  }
  Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'todo': todo, message: 'Todo Updated' });
  });
});

// TODO Add DELETE route to delete entries
router.delete('/todos/:id', function(req, res) {
  var id = req.params.id;
  Todo.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Todo Deleted' });
  });
});

// export our module
module.exports = router;
