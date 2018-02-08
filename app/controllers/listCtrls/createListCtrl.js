'use strict';

angular
    .module("phantomPanic")
    .controller("createListCtrl", function ($scope, AuthFactory, unitFactory, actionFactory, upgradeFactory, userListFactory) {
        let userId = AuthFactory.getCurrentUser();
        console.log('userId', userId);
        unitFactory.getUnitInfo().then(function(data){
            console.log('data',data);
            $scope.unitData = data.data;
        }).catch(function(error){
            console.log('sorry', error);
        });
        actionFactory.getActionInfo().then(function (data) {
            console.log('data', data);
            $scope.actionData = data.data;
        }).catch(function (error) {
            console.log('sorry', error);
        });
        upgradeFactory.getUpgradeInfo().then(function (data) {
            console.log('data', data);
            $scope.upgradeData = data.data;
        }).catch(function (error) {
            console.log('sorry', error);
        });
        $scope.createList = () => {
            // build object that contains the uid and list name
            //  pass that object to factory
            let newUserList = {
                uid: userId,
                listName: $scope.newListName,
                wins:"",
                losses:""
            };
            console.log('newUserList',newUserList);
            userListFactory.postNewUserList(newUserList);
        };
    });