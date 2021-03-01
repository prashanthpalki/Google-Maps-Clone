mapboxgl.accessToken = 'pk.eyJ1IjoicHJhc2hhbnRocGFsa2kiLCJhIjoiY2tsbHlocGxvMDMybDJ2bXMzN2Uzc2V6MSJ9.CEdsVEbXqHvH6b5A4eOGyQ';

navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy : true });

function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation(){
    setupMap([27.2046,77.4977])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center : center,
        zoom : 14
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken : mapboxgl.accessToken
    })

    map.addControl(directions,"top-left")
}
