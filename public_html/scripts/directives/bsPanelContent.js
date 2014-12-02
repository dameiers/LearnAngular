angular.module(
    'de.cismet.todoApp.directives'
    ).directive(
    'bsPanelContent',
    [
        function () {
            'use strict';
            // define the directive definition template
            var ddo;

            ddo = {
                templateUrl: 'templates/bsPanelContentTemplate.html',
                restrict: 'E',
                transclude:true
            };

            return ddo;
        }
    ]
    );