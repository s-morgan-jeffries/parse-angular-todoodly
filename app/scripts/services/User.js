'use strict';

angular.module('parseAngularTodoodlyApp')
  .factory('User', function(ParseUser, Todo) {
    var User = ParseUser;

    User.prototype.getTodos = function() {
      return Todo.query({
        where: {
          user: this.getPointer()
        },
        order: '-createdAt'
      });
    };

    User.prototype.addTodo = function(content) {
      var todo = new Todo({
        content: content,
        isDone: false,
        user: this.getPointer()
      });
      todo.setUserPriveleges(this, true, true);
      todo.$save();
      return todo;
    };

    return User;
  });