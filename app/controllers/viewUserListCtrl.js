'use strict';

angular
    .module("phantomPanic")
    .controller("viewUserListCtrl", function($scope, $routeParams, actionFactory, unitFactory, upgradeFactory, userListFactory){
        // List name, units, actions, upgrades that belong to the list //

        userListFactory.getUserListUnitInfo($routeParams.id)
        .then((data)=>{
            console.log('Unit data is:',data.data);
            for (const key in data.data) {
                    console.log('Unit Key',data.data[key].unitId);                     
            }
                unitFactory.getSpecificUnitInfo(data.unitId);
        });

        userListFactory.getUserListActionInfo($routeParams.id)
            .then((data) => {
                console.log('Action data is:', data.data);
                for (const key in data.data) {
                    console.log('Action Key', data.data[key].actionId);
                }
                actionFactory.getSpecificActionInfo(data.actionId);       
            });

        userListFactory.getUserListUpgradeInfo($routeParams.id)
            .then((data) => {
                console.log('Upgrade data is:', data.data);
                for (const key in data.data) {
                    console.log('Action Key', data.data[key].upgradeId);
                }
                upgradeFactory.getSpecificUpgradeInfo(data.upgradeId);
            });
    });