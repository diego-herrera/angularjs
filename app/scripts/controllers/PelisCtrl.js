
angular
    .module("pelis")
    .controller("PelisCtrl", function($scope) {

        // Con broadcast lanzamos eventos hacia abajo
        // en la jerarquía de $scopes.
        $scope.lanzarBroadcast = function() {

          $scope.$broadcast("MiEvento", "Hacia abajo!!");

        };

        // Con $on nos suscribimos a eventos.
        $scope.$on("MiOtroEvento", function(event, datos) {

            alert(datos);

        });
    });