'use strict';

angular.module('parseAngularTodoodlyApp')
  .factory('User', function(ParseUser, Todo, session) {
    var User = ParseUser;

    User.prototype.getTodos = function() {
      return Todo.query({
        where: {
          user: this.getPointer()
        },
        order: '-createdAt'
      }, function(data) {
        var todos = session.todos,
          args = [0, todos.length].concat(data);
        [].splice.apply(todos, args);
      });
    };

    User.signOut = (function() {
      var signOut = User.signOut;
      return function() {
        session.todos.splice(0, session.todos.length);
        signOut();
      };
    }());

    Object.defineProperty(session, 'refreshTodos', {
      enumerable: false,
      configurable: false,
      value: function() {
        return session.user.getTodos();
      }
    });

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