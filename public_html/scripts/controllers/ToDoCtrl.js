angular.module(
    'de.cismet.todoApp.controllers'
).controller(
    'TodoCtrl',
    [
        '$scope',
        function ($scope) {
            $scope.todos = ['Learn Bower', 'Learn Angular Basic Concepts',
                'Learn Angular Directives', 'Learn Angular Routing', 'Learn Grunt',
                'Implement Html 5 SIP', 'Implement Html 5 Navigator'];
        }
    ]
);