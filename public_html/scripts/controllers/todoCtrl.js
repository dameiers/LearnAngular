angular.module(
    'de.cismet.todoApp.controllers'
    ).controller(
    'TodoCtrl',
    [
        '$scope',
        'shortenFilter',
        '$resource',
        function ($scope, shortenFilter, $resource) {

            var todoResource, processQueryResult, transformRequest;

            $scope.name = 'Mr. X';
            $scope.todos = [];

            processQueryResult = function (todos) {
                var todoArr = JSON.parse(todos).$collection;
                return todoArr;
            };

            transformRequest = function (data) {
                var transformedData;

                transformedData = JSON.stringify(data, function (k, v) {
                    // we have to take care of angular properties by ourselves
                    if (k.substring(0, 1) === '$' && !(k === '$self' || k === '$ref')) {
                        return undefined;
                    }

                    return v;
                });
                return transformedData;
            };

            todoResource = $resource('http://localhost:8890/CIDS.todos/:todoId', {
                todoId: '@id',
                deduplicate: false,
                level: '1',
                omitNullValues: 'false'
            }, {
                'query': {
                    method: 'GET',
                    isArray: true,
                    transformResponse: processQueryResult
                },
                'update': {
                    method: 'PUT',
                    transformRequest: transformRequest
                }
            });

            todoResource.query(function (data) {
                $scope.todos = data;
//                $scope.firstTodo = $scope.todos[0];
//                $scope.firstTodo.done = false;
//                $scope.firstTodo.$update();
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

            $scope.customer = {
                name: 'Naomi',
                address: '1600 Amphitheatre'
            };
        }
    ]
    );