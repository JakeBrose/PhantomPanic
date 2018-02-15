'use strict';

angular.module("phantomPanic").factory("diceFactory", function ($http, $q, FBUrl) {
    let getCunningResults = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/dice/0.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };

    let getMightResults = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/dice/1.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    let getIntellectResults = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/dice/2.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    let getArmorResults = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/dice/3.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    let getEvadeResults = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/dice/4.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    return { 
        getCunningResults ,
        getMightResults,
        getIntellectResults,
        getArmorResults,
        getEvadeResults
    };
});
