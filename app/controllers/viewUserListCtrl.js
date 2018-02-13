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
                let relationshipId = key;
                $scope.unitId = data.data[key].unitId;                 
                unitFactory.getSpecificUnitInfo($scope.unitId)
                .then((data)=>{
                    $scope.getSpecificUnits = data.data;
                    $scope.getSpecificUnits.relationshipId = relationshipId;
                    $scope.userUnitArray.push($scope.getSpecificUnits);
                });
            }
        });
        $scope.deleteUserListUnit = (key) => {
            userListFactory.deleteUserListUnit(key)
                .then(() => {
                    console.log('list deleted');
                    $route.reload();
                });
        };

        userListFactory.getUserListActionInfo($routeParams.id)
            .then((data) => {
                $scope.userActionArray = [];
                for (const key in data.data) {
                    let relationshipId = key;
                    $scope.actionId = data.data[key].actionId;
                    actionFactory.getSpecificActionInfo($scope.actionId)
                    .then((data)=>{
                        $scope.getSpecificActions = data.data;
                        $scope.getSpecificActions.relationshipId = relationshipId;
                        $scope.userActionArray.push($scope.getSpecificActions);
                    });
                }
            });
        $scope.deleteUserListAction = (key) => {
            userListFactory.deleteUserListAction(key)
                .then(() => {
                    console.log('list deleted');
                    $route.reload();
                });
        };

        userListFactory.getUserListUpgradeInfo($routeParams.id)
            .then((data) => {
                $scope.userUpgradeArray = [];
                for (const key in data.data) {
                    let relationshipId = key;
                    $scope.upgradeId = data.data[key].upgradeId;
                    upgradeFactory.getSpecificUpgradeInfo($scope.upgradeId)
                        .then((data) => {
                            $scope.getSpecificUpgrades = data.data;
                            $scope.getSpecificUpgrades.relationshipId = relationshipId;
                            $scope.userUpgradeArray.push($scope.getSpecificUpgrades);
                        });
                }
            });
        $scope.deleteUserListUpgrade = (key) => {
            userListFactory.deleteUserListUpgrade(key)
                .then(() => {
                    console.log('list deleted');
                    $route.reload();
                });
        };
    });