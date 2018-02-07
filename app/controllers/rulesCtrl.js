'use strict';
angular
    .module("phantomPanic")
    .controller("rulesCtrl", function ($scope, phaseOneFactory, phaseTwoFactory, phaseThreeFactory) {
        phaseOneFactory.getPhaseOneInfo().then(function (data) {
            console.log('data', data);
            $scope.phaseOneData = data.data;
        }).catch(function (error) {
            console.log('sorry', error);
        });
        phaseTwoFactory.getPhaseTwoInfo().then(function (data) {
            console.log('data', data);
            $scope.phaseTwoData = data.data;
        }).catch(function (error) {
            console.log('sorry', error);
        });
        phaseThreeFactory.getPhaseThreeInfo().then(function (data) {
            console.log('data', data);
            $scope.phaseThreeData = data.data;
        }).catch(function (error) {
            console.log('sorry', error);
        });
    });