'use strict';

var Todo = require('./models/todo');

var todos = [
	'Feed the dog',
	'Brush the cats',
	'Do homework'
];

todos.forEach(function (todo, index) {
  Todo.find({ 'name': todo }, function(err, todos) {
  	if (!err && !todos.length) {
      Todo.create({ completed: false, name: todo });
  	};
  });
});
