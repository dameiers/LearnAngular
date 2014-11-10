angular.module(
    'de.cismet.todoApp.controllers'
    ).controller(
    'TodoCtrl',
    [
        '$scope',
        'shortenFilter',
        '$http',
        function ($scope, shortenFilter, $http) {

            $scope.name = 'Mr. X';
            $scope.todos=[];
            $http.get('resources/todos/todos.json').success(function (data) {
                $scope.todos = data;
            });

            $scope.addTodo = function () {
                $scope.todos.push({
                    title: shortenFilter($scope.newTodo, 10),
                    done: false
                });
                $scope.newTodo = '';
            };

            $scope.remaining = function () {
                var i, remaining;
                remaining = $scope.todos.length;
                for (i = 0; i < $scope.todos.length; i++) {
                    if ($scope.todos[i].done) {
                        remaining--;
                    }
                }

                return remaining;
            };

            $scope.archive = function () {
                var i, newTodos;

                newTodos = [];

                for (i = 0; i < $scope.todos.length; i++) {
                    if (!$scope.todos[i].done) {
                        newTodos.push($scope.todos[i]);
                    }
                }
                $scope.todos = newTodos;

            };
        }
    ]
    );