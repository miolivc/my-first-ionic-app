var app = angular.module("controller", [])

app.controller('homeController', ["$scope", "$state", function ($scope, $state) {
    $scope.nextPage = function (name) {
        if (name == 'news') {
            $state.go('news')
        } else {
            $state.go('list')
        }
    }
}])
