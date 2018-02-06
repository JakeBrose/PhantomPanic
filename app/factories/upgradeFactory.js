'use strict';

angular.module("phantomPanic").factory("upgradeFactory", function ($http, $q, FBUrl) {
    let getUpgradeInfo = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/upgrades.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    return { getUpgradeInfo };
});