'use strict';

angular
    .module("phantomPanic")
    .controller("userListCtrl", function ($scope, userListFactory, AuthFactory, $route){
        let userId = AuthFactory.getCurrentUser();
        console.log('userId',userId);
        userListFactory.getUserListInfo(AuthFactory.getCurrentUser()).then(function (data) {
            console.log('userListData', data);
            $scope.userListData = data.data;
        }).catch(function (error) {
            console.log('sorry', error);
            });
        $scope.deleteUserList = (listKey) => {
            userListFactory.deleteUserList(listKey)
            .then(()=>{
                $route.reload();
                console.log('list deleted');
            });           
        };
    });


    