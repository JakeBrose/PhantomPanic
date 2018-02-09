'use strict';

angular
    .module("phantomPanic")
    .controller("viewUserListCtrl", function($scope, $routeParams, actionFactory, unitFactory, upgradeFactory, userListFactory){
        // List name, units, actions, upgrades that belong to the list //

        userListFactory.getUserListUnitInfo($routeParams.id)
        .then((data)=>{
            // console.log('Unit data is:',data.data);
            $scope.userUnitArray = [];
            for (const key in data.data) {
                $scope.unitId = data.data[key].unitId;                  
                // console.log('Unit Key',$scope.unitId); 
                unitFactory.getSpecificUnitInfo($scope.unitId)
                .then((data)=>{
                    $scope.getSpecificUnits = data.data;
                    $scope.userUnitArray.push($scope.getSpecificUnits);
                    // console.log('getSpecificUnits',$scope.getSpecificUnits);
                    // console.log('userUnitArray',$scope.userUnitArray);
                });
            }
        });

        userListFactory.getUserListActionInfo($routeParams.id)
            .then((data) => {
                // console.log('Action data is:', data.data);
                $scope.userActionArray = [];
                for (const key in data.data) {
                    $scope.actionId = data.data[key].actionId;
                    // console.log('Action Key', $scope.actionId);
                    actionFactory.getSpecificActionInfo($scope.actionId)
                    .then((data)=>{
                        $scope.getSpecificActions = data.data;
                        $scope.userActionArray.push($scope.getSpecificActions);
                        // console.log('Actiondata',data);
                        // console.log('getSpecificActions',$scope.getSpecificActions);
                        // console.log('userActionArray',$scope.userActionArray);
                    });
                }
            });

        userListFactory.getUserListUpgradeInfo($routeParams.id)
            .then((data) => {
                $scope.userUpgradeArray = [];
                console.log('Upgrade data is:', data.data);
                for (const key in data.data) {
                    $scope.upgradeId = data.data[key].upgradeId;
                    console.log('Upgrade Key', $scope.upgradeId);
                    upgradeFactory.getSpecificUpgradeInfo($scope.upgradeId)
                        .then((data) => {
                            $scope.getSpecificUpgrades = data.data;
                            $scope.userUpgradeArray.push($scope.getSpecificUpgrades);
                            console.log('data', data);
                            console.log('getSpecificUpgrades', $scope.getSpecificUpgrades);
                            console.log('userUpgradeArray', $scope.userActionArray);
                        });
                }
            });
    });