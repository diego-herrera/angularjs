
angular
    .module("pelis")
    .controller("PelisProxCtrl", function($scope, $http, ApiService) {

        // Aquí usamos el servicio ApiService que hemos creado.
        // Pasamos el path concreto de la API que queremos usar
        // y nos devuelve una promesa con el resultado de la
        // petición.
        ApiService
            .obtenerDatosApi("movie/upcoming")
            .then(
                // Como fue bien, establecemos en $scope.peliculas
                // el valor obtenido, que es la colección de películas.
                function(datos) {
                    $scope.peliculas = datos.data.results;
                },
                function() {
                    alert("Hubo un error.")
                }
            );

        // Esta función obtiene la ruta de la imagen en
        // base a los datos que nos devuelve la API de
        // cada uno de las películas.
        $scope.obtenerRutaImagen = function(path) {

            return ApiService.rutaImagen(path, 45);
        };
    });













