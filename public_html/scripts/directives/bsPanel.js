angular.module(
    'de.cismet.todoApp.directives'
    ).directive(
    'bsPanel',
    [
        function () {
            'use strict';
            // define the directive definition template
            var ddo;

            ddo = {
                templateUrl: 'templates/bsPanelTemplate.html',
                restrict: 'E',
                scope: {
                    type: '@'
                },
                transclude:true
            };

            return ddo;
        }
    ]
    );