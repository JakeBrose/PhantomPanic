'use strict';

angular
    .module("phantomPanic")
    .controller("diceRollCtrl", function ($scope, diceFactory, $window, $route) {
        $scope.eraseResults = () => {
            $scope.mightRollResult = "";
            $scope.cunningRollResult = "";
            $scope.intellectRollResult = "";
            $scope.armorRollResult = "";
            $scope.evadeRollResult = "";
        };
        
        $scope.mightResult = () => {
            diceFactory.getMightResults().then(function(data){
                $scope.mightResultArray = data.data.result;
                $scope.diceRoll = Math.floor(Math.random() * 6) + 1;
                for (let i = 0; i < $scope.mightResultArray.length; i++) {
                    if ((i + 1) === $scope.diceRoll) {
                        $scope.mightRollResult = $scope.mightResultArray[i];
                    }             
                }
            });
        };

        $scope.cunningResult = () => {
            diceFactory.getCunningResults().then(function (data) {
                $scope.cunningResultArray = data.data.result;
                $scope.diceRoll = Math.floor(Math.random() * 6) + 1;
                for (let i = 0; i < $scope.cunningResultArray.length; i++) {
                    if ((i + 1) === $scope.diceRoll) {
                        $scope.cunningRollResult = $scope.cunningResultArray[i];
                    }
                }
            });
        };

        $scope.intellectResult = () => {
            diceFactory.getIntellectResults().then(function (data) {
                $scope.intellectResultArray = data.data.result;
                $scope.diceRoll = Math.floor(Math.random() * 6) + 1;
                for (let i = 0; i < $scope.intellectResultArray.length; i++) {
                    if ((i + 1) === $scope.diceRoll) {
                        $scope.intellectRollResult = $scope.intellectResultArray[i];
                    }
                }
            });
        };

        $scope.armorResult = () => {
            diceFactory.getArmorResults().then(function (data) {
                $scope.armorResultArray = data.data.result;
                $scope.diceRoll = Math.floor(Math.random() * 6) + 1;
                for (let i = 0; i < $scope.armorResultArray.length; i++) {
                    if ((i + 1) === $scope.diceRoll) {
                        $scope.armorRollResult = $scope.armorResultArray[i];
                    }
                }
            });
        };
        $scope.evadeResult = () => {
            diceFactory.getEvadeResults().then(function (data) {
                $scope.evadeResultArray = data.data.result;
                $scope.diceRoll = Math.floor(Math.random() * 6) + 1;
                for (let i = 0; i < $scope.evadeResultArray.length; i++) {
                    if ((i + 1) === $scope.diceRoll) {
                        $scope.evadeRollResult = $scope.evadeResultArray[i];
                    }
                }
            });
        };
    });
