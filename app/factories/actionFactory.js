'use strict';

angular.module("phantomPanic").factory("actionFactory", function ($http, $q, FBUrl) {
    let getActionInfo = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/actions.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    return { getActionInfo };
});