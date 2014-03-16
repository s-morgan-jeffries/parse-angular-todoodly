'use strict';

angular.module('parseAngularTodoodlyApp')
  .controller('TodosCtrl', function ($scope, session/*, Todo*/) {

    if (!session.isAuthenticated) {
      return;
    }

    var user = session.user,
      todos = $scope.todos = user.getTodos();

    $scope.addTodo = function() {
      var todo = user.addTodo(this.addTodoContent);

      todos.unshift(todo);
      this.addTodoContent = '';
    };

    $scope.toggleDone = function(id) {
      var todo = todos[_.indexOf(_.pluck(todos, 'objectId'), id)];
      todo.toggleDone();
    };

    $scope.deleteTodo = function(id) {
      var todoIdx = _.indexOf(_.pluck(todos, 'objectId'), id),
        todo = todos[todoIdx];

      todos.splice(todoIdx, 1);
      todo.$delete();
    };

  });
