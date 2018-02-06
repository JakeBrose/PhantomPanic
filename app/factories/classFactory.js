'use strict';

angular.module("phantomPanic").factory("classFactory", function ($http, $q, FBUrl) {
    let getClassInfo = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/classes.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    return { getClassInfo };
});