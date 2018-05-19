function getGeoLcoation(callback) {

    var position = { latitude: 0, longitude: 0 };
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function successFun(pos) {
        console.info(pos);
        position.latitude = pos.coords.latitude;
        position.longitude = pos.coords.longitude;
        callback(position);
    }

    function errorFun(errorThrown) {
        console.warn('error: ' + (errorThrown ? errorThrown : ""));
        callback(position);
    }

    navigator.geolocation.getCurrentPosition(successFun, errorFun, options);
}