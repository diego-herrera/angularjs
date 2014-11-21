
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

                // Con $watch lo que hacemos es monitorizar el
                // valor de una variable. Cuando ese valor cambia,
                // se ejecuta el callback que hemos establecido.
                scope.$watch(
                    // Como primer parámetro del $watch, pasamos una
                    // función que hace 'return' de la variable que
                    // queremos monitorizar.
                    function() {

                        return scope.miCheck;
                    },
                    // Como segundo parámetro del $watch, pasamos una
                    // función que hará de callback cuando el valor que
                    // se monitoriza cambie. Como primer parámetro de
                    // este callback nos llega el nuevo valor de la
                    // variable, mientras que el anterior valor nos
                    // llega como segundo parámetro.
                    function(valorNuevo, valorAnterior) {

                        if (valorAnterior !== valorNuevo) {

                            alert(valorNuevo);
                        }
                    }
                );

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
