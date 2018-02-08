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
    let getSpecificUnitInfo = (key) => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/units/${key}.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    function postNewUserUnit(newUserUnitObj) {
        return $q(function (resolve, reject) {
            $http.post(`${FBUrl}/user_lists_units.json`, JSON.stringify(newUserUnitObj))
                .then(function (data) {
                    console.log('data', data);
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
    return { getUnitInfo, getSpecificUnitInfo, postNewUserUnit };
});