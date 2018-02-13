'use strict';

angular.module("phantomPanic").factory("diceFactory", function ($http, $q, FBUrl) {
    let getDiceInfo = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/dice.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    return { getDiceInfo };
});