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
).directive('myCustomerTemplate',
    [
        function () {
            return {
                template: 'Name: {{customer.name}} Address: {{customer.address}}'
            };
        }
    ]
).directive('myCustomer',
    [
        function() {
            return {
                templateUrl: function(elem, attr){
                    return 'templates/customer-'+attr.type+'.html';
                }
            };
        }
    ]
);