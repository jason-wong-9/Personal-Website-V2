function initMap() {
    //Vancouver
    var myLatLng = {lat: 49.246292, lng: -123.116226};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: myLatLng,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Vancouver'
    });
}
        