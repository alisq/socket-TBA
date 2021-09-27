var map = L.map('map').setView([43.6514794,-79.4860513], 13);

L.tileLayer(
    'https://api.mapbox.com/styles/v1/iamasq/cksp237zq0wc017mg4vxumsw3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWFtYXNxIiwiYSI6ImNrc296bmRvaDAxMGkydnBsNGcwMzQwdGcifQ.PkRl94Sjs9H2IM0auw-zdg', {
        tileSize: 512,
        zoom:25,
        zoomOffset: -1,
        attribution: '',
        scrollWheelZoom: false
    }).addTo(map);
    