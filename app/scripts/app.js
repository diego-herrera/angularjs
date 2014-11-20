
// Definimos nuestra aplicación, que se llama 'pelis'.
// Nuestra aplicación, además, tiene dependencias de estos
// módulos: ngRoute, view-segment y route-segment.
angular.module("pelis", ["ngRoute", "view-segment", "route-segment"]);

// Configuramos el routing de nuestra aplicación.
angular.module("pelis").config(["$routeSegmentProvider", function($routeSegmentProvider) {

    // Establecemos la relación ruta / segmento.
    // Los segmentos son las zonas del DOM donde se cargarán de
    // manera dinámica las distintas vistas.
    $routeSegmentProvider.when("/pelis", "pelis");
    $routeSegmentProvider.when("/pelis/proximamente", "pelis.prox");
    $routeSegmentProvider.when("/series", "series");
    $routeSegmentProvider.when("/series/hoy", "series.hoy");

    // Configuramos el controlador y vista que se usarán en
    // el segmento 'pelis'.
    $routeSegmentProvider.segment("pelis", {
        controller: "PelisCtrl",
        templateUrl: "views/Pelis.html"
    });

    // Configuramos el controlador y vista que se usarán en
    // el segmento 'pelis.prox'.
    $routeSegmentProvider.within("pelis").segment("prox", {
        controller: "PelisProxCtrl",
        templateUrl: "views/PelisProx.html"
    });

    // Configuramos el controlador y vista que se usarán en
    // el segmento 'series'.
    $routeSegmentProvider.segment("series", {
        controller: "SeriesCtrl",
        templateUrl: "views/Series.html"
    });

    // Configuramos el controlador y vista que se usarán en
    // el segmento 'series.hoy'.
    $routeSegmentProvider.within("series").segment("hoy", {
        controller: "SeriesHoyCtrl",
        templateUrl: "views/SeriesHoy.html"
    });

}]);
