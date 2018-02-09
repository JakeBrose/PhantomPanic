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
    let getUserListUnitInfo = (listKey) => {
        return $q(function (resolve, reject) {
            console.log('listKey', listKey);
            $http.get(`${FBUrl}/user_lists_units.json?orderBy="listKey"&equalTo="${listKey}"`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    let getUserListActionInfo = (listKey) => {
        return $q(function (resolve, reject) {
            console.log('listKey', listKey);
            $http.get(`${FBUrl}/user_lists_actions.json?orderBy="listKey"&equalTo="${listKey}"`)
                .then(function (data) {
                    resolve(data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    };
    let getUserListUpgradeInfo = (listKey) => {
        return $q(function (resolve, reject) {
            console.log('listKey', listKey);
            $http.get(`${FBUrl}/user_lists_upgrades.json?orderBy="listKey"&equalTo="${listKey}"`)
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
    function deleteUserList (listKey){
        console.log('Delete User List');
        return $q(function(resolve, reject){
            $http.delete(`${FBUrl}/user_lists/${listKey}.json`)
            .then(function(){
                resolve();
            }).catch((error)=>{
                reject(error);
            });
        });
    }

    return { getUserListInfo, 
             postNewUserList, 
             getUserListUnitInfo, 
             getUserListActionInfo, 
             getUserListUpgradeInfo, 
             deleteUserList
            };
});
