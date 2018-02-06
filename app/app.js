"use strict";

let isAuth = (AuthFactory) =>
    new Promise((resolve, reject) => {
        AuthFactory.isAuthenticated().then(userBool => {
            console.log("user???", userBool);
            if (userBool) {
                console.log("Authenticated user. Go ahead");
                resolve();
            } else {
                console.log("Not Authenticated user. Go away");
                reject();
            }
        });
    });

angular
    .module("phantomPanic", ["ngRoute"])
    .constant("FBUrl", "https://phantom-panic.firebaseio.com/")
    .config($routeProvider => {
        $routeProvider
            .when("/", {
                templateUrl: "partials/login.html",
                controller: "loginCtrl",
            })
            .when("/items/list", {
                templateUrl: "partials/profile.html",
                controller: "profileCtrl"
            })
            // USER LISTS //
            .when("/items/list/userLists", {
                templateUrl: "partials/userLists.html",
                controller: "userListCtrl"
            })
            .when("/items/list/userLists/createList", {
                templateUrl: "partials/createList.html",
                controller: "cardCtrl",
            })
            // RULEBOOK //
            .when("/items/list/rules", {
                templateUrl: "partials/rules.html",
                controller: "rulesCtrl"
            })
            .when("/items/list/lore", {
                templateUrl: "partials/lore.html",
                controller: "loreCtrl"
            });
    })
    .run(FBCreds => {
        let creds = FBCreds;
        console.log('creds',creds);
        let authConfig = {
            apiKey: creds.fbKey,
            authDomain: creds.authDomain
        };
        firebase.initializeApp(authConfig);
    });