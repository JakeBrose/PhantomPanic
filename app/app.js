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
                controller: "profileCtrl",
                resolve: { isAuth }
            })
            // USER LISTS //
            .when("/items/list/userLists", {
                templateUrl: "partials/userLists.html",
                controller: "userListCtrl",
                resolve: { isAuth }
            })
            .when("/items/list/userLists/createList", {
                templateUrl: "partials/createList.html",
                controller: "createListCtrl",
                resolve: { isAuth }
            })
            .when("/items/list/viewUserList/:id", {
                templateUrl: "partials/viewUserList.html",
                controller: "viewUserListCtrl",
                resolve: { isAuth }
            })
            // RULEBOOK //
            .when("/items/list/rules", {
                templateUrl: "partials/rules.html",
                controller: "rulesCtrl",
                resolve: { isAuth }
            })
            .when("/items/list/rules/movementPhase", {
                templateUrl: "partials/phases/movementPhase.html",
                controller: "rulesCtrl",
                resolve: { isAuth }
            })
            .when("/items/list/rules/actionPhase", {
                templateUrl: "partials/phases/actionPhase.html",
                controller: "rulesCtrl",
                resolve: { isAuth }
            })
            .when("/items/list/rules/resolutionPhase", {
                templateUrl: "partials/phases/resolutionPhase.html",
                controller: "rulesCtrl",
                resolve: { isAuth }
            })
            // Lore //
            .when("/items/list/lore", {
                templateUrl: "partials/lore.html",
                controller: "loreCtrl",
                resolve: { isAuth }
            })
            // AR Toolkit //
            .when("/items/list/arTools", {
                templateUrl: "partials/arToolkit.html",
                resolve: { isAuth }
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