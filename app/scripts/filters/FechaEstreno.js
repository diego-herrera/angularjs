

angular
    .module("pelis")
    .filter("fechaEstreno", function() {

        // Los filtros siempre retornan funciones.
        // En este caso, establecemos como formato
        // el texto 'Se estrena en' más la fecha de
        // película.
        return function(fecha) {

            return "Se estrena en " + fecha;
        };

    });