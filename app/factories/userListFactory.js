'use strict';

angular.module("phantomPanic").factory("userListFactory", function ($http, $q, FBUrl) {
    let getUserListInfo = () => {
        return $q(function (resolve, reject) {
            $http.get(`${FBUrl}/user_lists.json`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    return { getUserListInfo };
});