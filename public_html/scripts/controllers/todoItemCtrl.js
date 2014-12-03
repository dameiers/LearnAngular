angular.module(
    'de.cismet.todoApp.controllers'
    ).controller(
    'TodoItemCtrl',
    [
        '$scope',
        '$routeParams',
        'ToDoResource',
        function ($scope, $routeParams, todoResource) {


            todoResource.get({todoId:$routeParams.id,level:3,deduplicate:true},function (data) {
                $scope.todo = data;
            });

            $scope.knobVal = 88;
            $scope.knobOptions = {
                'height': 80,
                'displayInput': true,
            };

            $scope.deleteTodo = function (todoItem) {
                var i, indexToRemove;
                indexToRemove = -1
                for (i = 0; i < $scope.todos.length; i++) {
                    if ($scope.todos[i].$self === todoItem.$self) {
                        indexToRemove = i;
                        break;
                    }
                }
                if (indexToRemove >= 0) {
                    $scope.todos.splice(i, 1);
                    todoResource.delete({todoId:todoItem.id});
                }else{
                    console.error("could not delete todo"+JSON.stringify(todoItem))
                }
            };

            $scope.persistTodo = function (todoItem) {
                todoItem.$update();
            };

        }
    ]
    );