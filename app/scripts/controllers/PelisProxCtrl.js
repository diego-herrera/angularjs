
angular
    .module("pelis")
    .controller("PelisProxCtrl", function($scope) {

        // Con $on nos suscribimos a eventos.
        $scope.$on("MiEvento", function(event, datos) {

            alert(datos);
        });

        // Con emit lanzamos eventos hacia arriba
        // en la jerarquía de $scopes.
        $scope.lanzarEmit = function() {

            $scope.$emit("MiOtroEvento", "Hacia arriba!!");

        };

    });