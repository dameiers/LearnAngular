angular.module(
    'de.cismet.todoApp.directives'
    ).directive(
    'todoList',
    [
        function () {
            'use strict';
            // define the directive definition template
            var directiveDefinition = {
                //configure the various option of a directive here...
                // see https://docs.angularjs.org/api/ng/service/$compile fore more details
                templateUrl: 'templates/todoListTemplate.html'
            }

            return directiveDefinition;
        }
    ]
    ).directive('myCustomer',
    [
        function () {
            return {
                template: '<div>Name: <input ng-model="customerName"> Address: {{customerAddress}}</div>',
//                template: '<div>Name: <input ng-model="customer.name"> Address: {{customerAddress}}</div>',
                restrict: 'E',
                scope: true
            }
            ;
        }
    ]
    );