'use strict';

angular.module("phantomPanic").factory("phaseTwoFactory", function ($http, $q, FBUrl) {
    let getPhaseTwoInfo = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/phaseTwo.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    return { getPhaseTwoInfo };
});