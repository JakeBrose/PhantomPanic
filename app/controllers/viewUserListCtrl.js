'use strict';

angular
    .module("phantomPanic")
    .controller("viewUserListCtrl", function(
        $scope, 
        $routeParams, 
        actionFactory, 
        unitFactory, 
        upgradeFactory, 
        userListFactory, 
        $route
    ){

        userListFactory.getUserListUnitInfo($routeParams.id)
        .then((data)=>{
            $scope.userUnitArray = [];
            for (const key in data.data) {
                $scope.unitId = data.data[key].unitId;                  
                unitFactory.getSpecificUnitInfo($scope.unitId)
                .then((data)=>{
                    $scope.getSpecificUnits = data.data;
                    // console.log('object.keys',Object.keys(data.data));
                    $scope.userUnitArray.push($scope.getSpecificUnits);
                });
            }
        });
        $scope.deleteUserListUnit = (key) => {
            userListFactory.deleteUserListUnit(key)
                .then(() => {
                    $route.reload();
                    console.log('list deleted');
                });
        };

        userListFactory.getUserListActionInfo($routeParams.id)
            .then((data) => {
                $scope.userActionArray = [];
                for (const key in data.data) {
                    $scope.actionId = data.data[key].actionId;
                    actionFactory.getSpecificActionInfo($scope.actionId)
                    .then((data)=>{
                        $scope.getSpecificActions = data.data;
                        $scope.userActionArray.push($scope.getSpecificActions);
                    });
                }
            });

        userListFactory.getUserListUpgradeInfo($routeParams.id)
            .then((data) => {
                $scope.userUpgradeArray = [];
                for (const key in data.data) {
                    $scope.upgradeId = data.data[key].upgradeId;
                    upgradeFactory.getSpecificUpgradeInfo($scope.upgradeId)
                        .then((data) => {
                            $scope.getSpecificUpgrades = data.data;
                            $scope.userUpgradeArray.push($scope.getSpecificUpgrades);
                        });
                }
            });
    });