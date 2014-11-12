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
    ).directive('myCustomerIsolated',
    [
        function () {
            return {
                template: '<div>Name: {{customer.name}} Address: {{customer.address}}</div><div>Name: {{vojta.name}} Address: {{vojta.address}}</div>',
                restrict: 'E',
                scope: {
                    customer:'=customerInfo'
                }
            }
            ;
        }
    ]
    ).directive('myCustomer',
    [
        function () {
            return {
                template: '<div>Name: {{customer.name}} Address: {{customer.address}}</div><div>Name: {{vojta.name}} Address: {{vojta.address}}</div>',
                restrict: 'E',
                scope: true
            }
            ;
        }
    ]
    );