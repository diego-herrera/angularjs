

angular
    .module("pelis")
    .filter("fechaEstreno", function($filter) {

        // Esto no es usual, pero se puede hacer igual.
        // Estamos usando un filtro dentro de otro.
        // Por ejemplo, el filtro 'date', que viene con
        // AngularJS de serie.
        return function(fecha) {
            var nuevaFecha = $filter("date")(fecha, "dd/MM/yyyy");
            return "Se estrena en " + nuevaFecha;
        };

    });