
// Aquí definimos una directiva para mostrar los
// datos de una película o una serie dentro de una
// tabla.
angular
    .module("pelis")
    .directive("listItem", function(ApiService) {

        // Este objeto configura nuestra directiva.
        return {
            // Con restrict AE decimos que nuestra
            // directiva se puede usar como atributo
            // de un elemento (A) o como un elemento
            // propiamente dicho (E).
            restrict: "AE",
            // Con replace = true lo que hacemos es
            // sustituir el elemento donde usamos la
            // directiva por el DOM que hay establecido
            // en el template.
            replace: true,
            // Esta es la vista de la directiva.
            templateUrl: "views/ListItem.html",
            // Este scope es el que usará la vista
            // para comunicarse con el "controlador",
            // que será nuestra función link.
            scope: {
                peli: "=",
                alSeleccionar: "&"
            },
            // En esta función link establecemos las
            // funcionalidades de nuestro scope, que
            // serán accesibles por la vista.
            link: function(scope) {

                scope.obtenerRutaImagen = function(path) {

                    return ApiService.rutaImagen(path, 45);
                };

                scope.selecciona = function(id) {

                    // Ejecutamos la función 'alSeleccionar'
                    // para notificar que se ha seleccionado
                    // una película.
                    scope.alSeleccionar({
                        itemId: id
                    });
                };
            }
        };

    });
