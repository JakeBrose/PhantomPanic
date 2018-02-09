'use strict';

angular.module("phantomPanic").factory("actionFactory", function ($http, $q, FBUrl) {
    let getActionInfo = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/actions.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    let getSpecificActionInfo = (key) => {
        console.log('look at this key',key);
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/actions/${key}.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    function postNewUserAction(newUserActionObj) {
        return $q(function (resolve, reject) {
            $http.post(`${FBUrl}/user_lists_actions.json`, JSON.stringify(newUserActionObj))
                .then(function (data) {
                    console.log('data', data);
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
    return { getActionInfo, getSpecificActionInfo, postNewUserAction };
});
