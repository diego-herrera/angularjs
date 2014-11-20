
angular
    .module("pelis")
    .controller("PelisProxCtrl", function($scope, $http) {

        // $http es un servicio de AngularJS para hacer
        // peticiones a recursos. Funciona igual que $.ajax()
        // de jQuery. $http retorna una "promesa", por eso debemos
        // pasar dos parámetros a modo de callback.
        $http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=826b523c417cbb888744b13031d846c2&language=es").then(

            // La primera función se ejecuta cuando la
            // petición fue bien.
            function(datos) {

                $scope.peliculas = datos.data.results;
            },

            // La segunda función se ejecuta cuando la
            // petición fue mal.
            function() {

                alert("Hubo un error");
            }
        );
    });