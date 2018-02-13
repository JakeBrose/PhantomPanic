'use strict';

angular
    .module("phantomPanic")
    .controller("diceRollCtrl", function ($scope, diceFactory) {
        diceFactory.getDiceInfo().then(function (data) {
            for (const key in data.data) {
                $scope.diceData = data.data[key];
                console.log('diceData',$scope.diceData);
                console.log('Results',$scope.diceData.result[0]);
            }
        }).catch(function (error) {
            console.log('sorry', error);
        });
    });