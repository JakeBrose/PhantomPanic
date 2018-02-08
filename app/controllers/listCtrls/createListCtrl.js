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
            let newUserList = {
                uid: userId,
                listName: $scope.newListName,
                wins:0,
                losses:0
            };
            console.log('newUserList',newUserList);
            userListFactory.postNewUserList(newUserList)
            .then((FBKeyData)=>{
                console.log('FBKeyData is:',FBKeyData.data.name);
                $scope.currentListFBKey = FBKeyData.data.name;
            });
        };
        $scope.addUnitToNewList = (key) => {
            unitFactory.getSpecificUnitInfo(key).then((unitData) => {
                $scope.unitInfo = unitData.data;
                console.log('unitData is:', unitData.data.id);
                console.log('works');
                let userListUnit = {
                    unitId: $scope.unitInfo.id,
                    listKey:$scope.currentListFBKey
                };
                console.log('userListUnit:',userListUnit);
                unitFactory.postNewUserUnit(userListUnit)
            .then((FBKeyData)=>{
                console.log('FBKeyData is:',FBKeyData.data.name);
                $scope.currentListFBKey = FBKeyData.data.name;
            });
            });
        };
        $scope.addActionToNewList = (key) => {
            actionFactory.getSpecificActionInfo(key).then((actionData) => {
                $scope.actionInfo = actionData.data;
                console.log('actionData is:', actionData.data);
                console.log('works');
                let userListAction = {
                    actionId: $scope.actionInfo.id,
                    listKey:$scope.currentListFBKey
                };
                console.log('userListAction:',userListAction);
                actionFactory.postNewUserAction(userListAction)
            .then((FBKeyData)=>{
                console.log('FBKeyData is:',FBKeyData.data.name);
                $scope.currentListFBKey = FBKeyData.data.name;
            });
            });
        };
        $scope.addUpgradeToNewList = (key) => {
            upgradeFactory.getSpecificUpgradeInfo(key).then((upgradeData) => {
                $scope.upgradeInfo = upgradeData.data;
                console.log('upgradeData is:', upgradeData.data);
                console.log('works');
                let userListUpgrade = {
                    upgradeId: $scope.upgradeInfo.id,
                    listKey:$scope.currentListFBKey
                };
                console.log('userListUpgrade:',userListUpgrade);
                upgradeFactory.postNewUserUpgrade(userListUpgrade)
            .then((FBKeyData)=>{
                console.log('FBKeyData is:',FBKeyData.data.name);
                $scope.currentListFBKey = FBKeyData.data.name;
            });
            });
        };
    });