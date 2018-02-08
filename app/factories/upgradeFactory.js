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
    let getSpecificUpgradeInfo = (key) => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/upgrades/${key}.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    function postNewUserUpgrade(newUserUpgradeObj) {
        return $q(function (resolve, reject) {
            $http.post(`${FBUrl}/user_lists_upgrades.json`, JSON.stringify(newUserUpgradeObj))
                .then(function (data) {
                    console.log('data', data);
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
    return { getUpgradeInfo, getSpecificUpgradeInfo, postNewUserUpgrade };
});