'use strict';

angular
    .module("phantomPanic")
    .controller("cardCtrl", function ($scope, unitFactory, actionFactory, upgradeFactory) {
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
    });