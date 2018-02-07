'use strict';

angular.module("phantomPanic").factory("phaseThreeFactory", function ($http, $q, FBUrl) {
    let getPhaseThreeInfo = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/phaseThree.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    return { getPhaseThreeInfo };
});