angular.module(
    'de.cismet.todoApp',
    [
        'ngResource',
        'ngRoute',
        'de.cismet.todoApp.controllers',
        'de.cismet.todoApp.directives',
        'de.cismet.todoApp.filters',
        'de.cismet.todoApp.services',
    ]
    ).config(
    [
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when(
                    '/todo/:id', {
                        controller: 'TodoItemCtrl',
                        templateUrl: 'views/todoItem.html'
                    })
                .when(
                    '/todoList', {
                        controller: 'TodoCtrl',
                        templateUrl: 'views/todoList.html'
                    })
                .otherwise(
                    {
                        redirectTo: '/todoList'
                    }
                );
        }
    ]
    );