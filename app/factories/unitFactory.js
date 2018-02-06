'use strict';

angular.module("phantomPanic").factory("unitFactory", function ($http, $q, FBUrl) {
    let getUnitInfo = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/units.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    return { getUnitInfo };
});