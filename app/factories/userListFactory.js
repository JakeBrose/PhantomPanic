'use strict';

angular.module("phantomPanic").factory("userListFactory", function ($http, $q, FBUrl) {
    
    let getUserListInfo = (uid) => {
        return $q(function (resolve, reject) {
            console.log('uid',uid);
            $http.get(`${FBUrl}/user_lists.json?orderBy="uid"&equalTo="${uid}"`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    function postNewUserList(newUserListObj){
        return $q(function (resolve, reject) {
            $http.post(`${FBUrl}/user_lists.json`, JSON.stringify(newUserListObj))
            .then(function(data){
                console.log('data',data);
                resolve(data);
            })
            .catch(function(error){
                reject(error);
            });
        });
    }
    return { getUserListInfo, postNewUserList };
});
