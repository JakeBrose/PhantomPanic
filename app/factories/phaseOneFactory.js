'use strict';

angular.module("phantomPanic").factory("phaseOneFactory", function ($http, $q, FBUrl) {
    let getPhaseOneInfo = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/phaseOne.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    return { getPhaseOneInfo };
});