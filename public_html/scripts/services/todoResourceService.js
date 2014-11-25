angular.module('de.cismet.todoApp.services').factory(
    'de.cismet.todoApp.services.todoResource',
    [
        '$resource',
        function ($resource) {
            'use strict';
            var todoResource, processQueryResult, transformRequest;

            processQueryResult = function (todos) {
                var todoArr = JSON.parse(todos).$collection;
                return todoArr;
            };

            transformRequest = function (data) {
                var transformedData;

                transformedData = JSON.stringify(data, function (k, v) {
                    // we have to take care of angular properties by ourselves
                    if (k.substring(0, 1) === '$' && !(k === '$self' || k === '$ref')) {
                        return undefined;
                    }

                    return v;
                });
                return transformedData;
            };
             
            todoResource = $resource('http://localhost:8890/CIDS.todos/:todoId', {
                todoId: '@id',
                deduplicate: false,
                level: '1',
                omitNullValues: 'false'
            }, {
                'query': {
                    method: 'GET',
                    isArray: true,
                    transformResponse: processQueryResult
                },
                'update': {
                    method: 'PUT',
                    transformRequest: transformRequest
                }
            });

            return todoResource;
        }
    ]
    );

