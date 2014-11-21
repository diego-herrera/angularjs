
angular
    .module("pelis")
    .controller("PelisProxCtrl",
    function($scope, ApiService, Peliculas, $location, $filter) {

        // La colección de películas nos llega ya resuelta
        // como dependencia.
        $scope.peliculas = Peliculas.data.results;

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

        // Con el servicio $filter podemos usar filtros desde
        // un controlador. En este caso usamos el filtro
        // 'fechaEstreno'.
        $scope.aplicaFiltroFecha = function(fecha) {

            return $filter("fechaEstreno")(fecha);
        };
    });













