
// Servicio con las funcionalidades comunes de la API.
angular.module("pelis").service("ApiService", function($http) {

    // Esta función monta la URL de las imágenes de las
    // películas, series, etc.
    this.rutaImagen = function(path, size) {

        return path !== null
            ? "http://image.tmdb.org/t/p/w" + size + path
            : null;

    };

    // En este punto centralizamos las llamadas a la API, para
    // no tener que llamar desde todos los controladores.
    this.obtenerDatosApi = function(path) {

        return $http.get("https://api.themoviedb.org/3/" + path + "?api_key=826b523c417cbb888744b13031d846c2&language=es");
    };

});







