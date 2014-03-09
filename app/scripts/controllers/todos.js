'use strict';

angular.module('parseAngularTodoodlyApp')
  .controller('TodosCtrl', function ($scope, session, Todo) {

    var updateTodos = function() {
      if (!session.isAuthenticated) {
        return;
      }
      var queryParams = {
        user: {
          __type: 'Pointer',
          className: '_User',
          objectId: session.userId
        }
      };
      Todo.query(queryParams, function(data) {
        $scope.todos = data;
//        todos = $scope.todos;
      });
    };

    updateTodos();

    $scope.todos = [];

    $scope.addTodo = function() {
      if (!session.isAuthenticated) {
        return;
      }

      var todo = new Todo({
        content: this.addTodoContent,
        isDone: false,
        user: {
          __type: 'Pointer',
          className: '_User',
          objectId: session.userId
        },
        ACL: {}
      });
      todo.ACL[session.userId] = {
        read: true,
        write: true
      };

      this.todos.push(todo);
      this.addTodoContent = '';
      todo.$save();
    };

    $scope.toggleDone = function(id) {
      var todo = this.todos[_.indexOf(_.pluck(this.todos, 'objectId'), id)];
      todo.$save({isDone: !todo.isDone});
    };

    $scope.deleteTodo = function(id) {
      var todoIdx = _.indexOf(_.pluck(this.todos, 'objectId'), id),
        todo = this.todos[todoIdx];

      this.todos.splice(todoIdx, 1);
      todo.$delete();
    };

  });
