
angular
    .module("pelis")
    .controller("SeriesCtrl", ["$scope", function($scope) {

        $scope.serie = {
            title: "Breaking Bad",
            year: 2008
        };
    }]);