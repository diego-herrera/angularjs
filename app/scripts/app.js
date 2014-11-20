
angular.module("pelis", ["ngRoute", "view-segment", "route-segment"]);

angular.module("pelis").config(["$routeSegmentProvider", function($routeSegmentProvider) {

    $routeSegmentProvider.when("/pelis", "pelis");
    $routeSegmentProvider.when("/series", "series");

    $routeSegmentProvider.segment("pelis", {
        controller: "PelisCtrl",
        templateUrl: "views/Pelis.html"
    });

    $routeSegmentProvider.segment("series", {
        controller: "SeriesCtrl",
        templateUrl: "views/Series.html"
    });

}]);
