
// Definimos nuestra aplicación, que se llama 'pelis'.
// Nuestra aplicación, además, tiene dependencias de estos
// módulos: ngRoute, view-segment y route-segment.
angular.module("pelis", ["ngRoute", "view-segment", "route-segment"]);

// Configuramos el routing de nuestra aplicación.
angular
    .module("pelis")
    .config(["$routeSegmentProvider",
        "$routeProvider",
        function($routeSegmentProvider, $routeProvider) {

    // Con la función 'otherwise' de $routeProvider
    // establecemos la ruta a navegar por defecto
    // en caso de que el usuario introduzca una que
    // no existe.
    $routeProvider.otherwise({
        redirectTo: "/pelis/proximamente"
    });

    // Establecemos la relación ruta / segmento.
    // Los segmentos son las zonas del DOM donde se cargarán de
    // manera dinámica las distintas vistas.
    $routeSegmentProvider.when("/pelis", "pelis");
    $routeSegmentProvider.when("/pelis/proximamente", "pelis.prox");
    $routeSegmentProvider.when("/pelis/detalle", "pelis.detalle");
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
        templateUrl: "views/PelisProx.html",
        // Utilizamos el objeto 'resolve' para resolver dependencias
        // que inyectar al controlador. En este caso, la lista de
        // películas debería llegar resuelta al controlador, no ser
        // él quien la resuelva. Por tanto, hacemos la llamada en
        // este punto. Como veis, utilizamos para este resolve la
        // inyección de dependencias 'completa', la que necesita
        // el array de strings + function de dependencias. Todas
        // aquellas dependencias que se deseen resolver en este
        // punto tienen que devolver una promesa.
        resolve: {
            Peliculas:["ApiService", function(ApiService) {
                return ApiService.obtenerDatosApi("movie/upcoming");
            }]
        }
    });

    $routeSegmentProvider.within("pelis").segment("detalle", {
        controller: "PeliDetalleCtrl",
        templateUrl: "views/PeliDetalleCtrl.html",
        resolve: {
            // Aquí se obtiene de la API los detalles de una
            // película. Para ello, obtiene el identificador
            // de la misma de la querystring del navegador. Lo
            // hacemos a través del servicio de $routeParams de
            // AngularJS.
            Pelicula: ["ApiService", "$routeParams",
                function(ApiService, $routeParams) {
                    var id = $routeParams.peliculaId;
                    return ApiService.obtenerDatosApi("movie/" + id);
                }]
        }
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
