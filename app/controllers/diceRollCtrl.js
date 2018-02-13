'use strict';

angular
    .module("phantomPanic")
    .controller("diceRollCtrl", function ($scope, $window) {
        $scope.test = console.log('profile');
        $scope.rollMight = () => {
            let mightResult = Math.floor(Math.random() * 6) + 1;
            if (mightResult === 1) {
                $window.alert("Blank City, Bozo!");
            } else if (mightResult === 2) {
                $window.alert("You rolled 1 hits!");
                $window.alert("You rolled 0 crits!");
                $window.alert("You rolled 0 Specials!");
            } else if (mightResult === 3) {
                $window.alert("You rolled 2 hits!");
                $window.alert("You rolled 0 crits!");
                $window.alert("You rolled 0 Specials!");
            } else if (mightResult === 4) {
                $window.alert("You rolled 1 hits!");
                $window.alert("You rolled 1 crits!");
                $window.alert("You rolled 0 Specials!");
            } else if (mightResult === 5) {
                $window.alert("You rolled 2 hits!");
                $window.alert("You rolled 0 crits!");
                $window.alert("You rolled 1 Specials!");
            } else if (mightResult === 6) {
                $window.alert("You rolled 2 hits!");
                $window.alert("You rolled 1 crits!");
                $window.alert("You rolled 0 Specials!");
            }
        };
        $scope.rollCunning = () => {
            let cunningResult = Math.floor(Math.random() * 6) + 1;
            if (cunningResult === 1) {
                $window.alert("You rolled 1 hits!");
                $window.alert("You rolled 0 crits!");
                $window.alert("You rolled 0 Specials!");
            } else if (cunningResult === 2) {
                $window.alert("You rolled 0 hits!");
                $window.alert("You rolled 1 crits!");
                $window.alert("You rolled 0 Specials!");
            } else if (cunningResult === 3) {
                $window.alert("You rolled 2 hits!");
                $window.alert("You rolled 0 crits!");
                $window.alert("You rolled 0 Specials!");
            } else if (cunningResult === 4) {
                $window.alert("You rolled 1 hits!");
                $window.alert("You rolled 0 crits!");
                $window.alert("You rolled 1 Specials!");
            } else if (cunningResult === 5) {
                $window.alert("You rolled 2 hits!");
                $window.alert("You rolled 0 crits!");
                $window.alert("You rolled 1 Specials!");
            } else if (cunningResult === 6) {
                $window.alert("You rolled 1 hits!");
                $window.alert("You rolled 1 crits!");
                $window.alert("You rolled 1 Specials!");
            }
        };
        $scope.rollIntellect = () => {
            let intellectResult = Math.floor(Math.random() * 6) + 1;
            if (intellectResult === 1) {
                $window.alert("Blank City, Bozo!");
            } else if (intellectResult === 2) {
                $window.alert("You rolled 1 hits!");
                $window.alert("You rolled 0 crits!");
                $window.alert("You rolled 0 Specials!");
            } else if (intellectResult === 3) {
                $window.alert("You rolled 1 hits!");
                $window.alert("You rolled 0 crits!");
                $window.alert("You rolled 1 Specials!");
            } else if (intellectResult === 4) {
                $window.alert("You rolled 0 hits!");
                $window.alert("You rolled 1 crits!");
                $window.alert("You rolled 1 Specials!");
            } else if (intellectResult === 5) {
                $window.alert("You rolled 0 hits!");
                $window.alert("You rolled 0 crits!");
                $window.alert("You rolled 2 Specials!");
            } else if (intellectResult === 6) {
                $window.alert("You rolled 1 hits!");
                $window.alert("You rolled 0 crits!");
                $window.alert("You rolled 2 Specials!");
            }
        };
    });