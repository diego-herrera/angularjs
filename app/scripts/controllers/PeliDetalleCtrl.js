
angular
    .module("pelis")
    .controller("PeliDetalleCtrl", function($scope, Pelicula, ApiService) {

        $scope.pelicula = Pelicula.data;

        // Esta función obtiene la ruta de la imagen.
        $scope.obtenerRutaImagen = function(path) {

            return ApiService.rutaImagen(path, 150);
        };

    });