
angular
    .module("pelis")
    .controller("PelisProxCtrl", function($scope, $http, $q, $timeout) {

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

        // Objetos diferidos. Creamos un objeto diferido
        // y lo resolvemos, para ver cómo se ejecuta la
        // primera función del 'then' de su promesa.
        function diferido() {

            // Se crea el diferido.
            var deferred = $q.defer();

            $timeout(function() {
                // Se resuelve.
                deferred.resolve("Ya he terminado")
            }, 2000, false);

            // Se retorna siempre la promesa del diferido.
            return deferred.promise;
        }

        // Ejemplo de promesa.
        $scope.ejecutarPromesa = function() {

            // diferido() retorna una promesa.
            diferido()
                .then(
                // En caso de que se resuelva.
                function(datos) {
                    alert("Bien:" + datos);
                },
                // En caso de que se rechace.
                function(error) {
                    alert("Mal: " + error);
                }
            );
        };
    });