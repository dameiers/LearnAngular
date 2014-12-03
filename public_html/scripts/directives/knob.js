angular.module(
    'de.cismet.todoApp.directives'
    ).directive(
    'knob',
    [
        function () {
            'use strict';
            // define the directive definition template
            var ddo, linkFunction;


            linkFunction = function (scope, elem) {
                var updateKnobValue, getKnobOptions, onJqueryKnobRelease, knobOptions, inputElem, knobInstance, safeApply;
                
                // find the input element and initialize the JQuery Knob
                inputElem = elem.find('input');
                inputElem.knob();
                
                // helper function to determine if we are already in a digest cycle
                safeApply = function () {
                    var phase = scope.$root.$$phase;
                    if (phase !== '$apply' && phase !== '$digest') {
                        scope.$apply();
                    } 
                };

                //Event Listener for JQuery Knob Release Event
                onJqueryKnobRelease = function (v) {
                    scope.knobData = v;
                    safeApply();
//                    scope.$apply();
                };

                //initialize the options object for the jquery knob
                getKnobOptions = function () {
                    var knobOptions;

                    knobOptions = {
                        'max': 100,
                        'width': 100,
                        'height': 100,
                        'displayInput': false,
                        'angleOffset': -125,
                        'angleArc': 250
                    };

                    //extend with the binded options
                    angular.extend(knobOptions, scope.knobOptions);

                    knobOptions.release = onJqueryKnobRelease;

                    return knobOptions;
                };

                updateKnobValue = function () {
                    inputElem.val(scope.knobData).trigger('change');
                };

                knobOptions = getKnobOptions();
                //we force the knop to horizontally align in its div...
//                inputElem.find('div').css('display', 'block')
//                    .css('margin', '0 auto');

                scope.$watch('knobData', function () {
                    updateKnobValue();
                }, true);

                scope.$watchCollection('knobOptions', function (newVal, oldVal) {
                    knobOptions = getKnobOptions();
                    inputElem.trigger('configure', knobOptions);
                    updateKnobValue();
                });

            };

            ddo = {
                templateUrl: 'templates/knobTemplate.html',
                restrict: 'E',
                scope: {
                    knobData: '=',
                    knobOptions: '='
                },
                link: linkFunction
            };

            return ddo;
        }
    ]
    );