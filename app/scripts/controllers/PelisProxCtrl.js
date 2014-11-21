
angular
    .module("pelis")
    .controller("PelisProxCtrl", function($scope, ApiService, Peliculas) {

        // La colección de películas nos llega ya resuelta
        // como dependencia.
        $scope.peliculas = Peliculas.data.results;

        // Esta función obtiene la ruta de la imagen en
        // base a los datos que nos devuelve la API de
        // cada uno de las películas.
        $scope.obtenerRutaImagen = function(path) {

            return ApiService.rutaImagen(path, 45);
        };
    });













