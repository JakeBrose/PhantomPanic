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