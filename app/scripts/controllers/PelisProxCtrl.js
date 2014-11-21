
angular
    .module("pelis")
    .controller("PelisProxCtrl",
    function($scope, ApiService, Peliculas, $location) {

        // La colección de películas nos llega ya resuelta
        // como dependencia.
        $scope.peliculas = Peliculas.data.results;

        // Esta función obtiene la ruta de la imagen en
        // base a los datos que nos devuelve la API de
        // cada uno de las películas.
        $scope.obtenerRutaImagen = function(path) {

            return ApiService.rutaImagen(path, 45);
        };

        // Esta función va a navegar a la vista de detalle
        // de la película. Recibe como parámetro el
        // identificador de la película y la establece como
        // parámetro de la querystring. El resultado de esta
        // función es este: /pelis/detalle?peliculaId={id}
        $scope.verDetalle = function(id) {

            $location.path("/pelis/detalle").search({
               peliculaId: id
            });
        };
    });













