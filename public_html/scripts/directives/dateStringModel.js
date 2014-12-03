angular.module(
    'de.cismet.todoApp.directives'
    ).directive(
    'dateStringModel',
    [
        function () {
            'use strict';
            // define the directive definition template
            var ddo, linkFunction;

            linkFunction = function (scope, elem, attrs, ctrl) {
               ctrl.$parsers.push(function(dateViewValue){
                  return dateViewValue.toString();
               });
               
               ctrl.$formatters.push(function(dateString){
                  return new Date(dateString);
               });
            };

            ddo = {
                require: '^ng-model',
                restrict: 'A',
                link: linkFunction
            };

            return ddo;
        }
    ]
    );