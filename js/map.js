let polyLine = [];
let allLocations = [];
let boundsArray = [];
  // setup a marker group
  var markers = L.layerGroup();
console.log(garrisonMap)




let map = L.map('map', {
    center: [43.6514794,-79.4860513],
    zoom: 13,
    maxZoom: 24
  });

L.tileLayer(
    'https://api.mapbox.com/styles/v1/iamasq/cksp237zq0wc017mg4vxumsw3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWFtYXNxIiwiYSI6ImNrc296bmRvaDAxMGkydnBsNGcwMzQwdGcifQ.PkRl94Sjs9H2IM0auw-zdg', {
        tileSize: 512,
        zoom:25,
        zoomOffset: -1,
        attribution: '',
        scrollWheelZoom: false
    }).addTo(map);
    


$("#garrisonMap").click(function(){
    $(".active").removeClass("active")
    $(this).addClass("active")
     //map.removeLayer(markers);

for (var i=0; i<garrisonMap.length; i++) {
    var ll = (garrisonMap[i].place.replace("LatLng(","").replace(")","").split(","))
    // var lon = garrisonMap[i][0];
    // var lat = garrisonMap[i][1];
    // var popupText = garrisonMap[i][2];
    
    allLocations.push(garrisonMap[i])

    var mLocation = new L.LatLng(ll[0], ll[1]);
        var m = new L.Marker(mLocation);

        polyLine.push(mLocation)
        boundsArray.push(mLocation)
     
        /* html */
        popupContent = `
                <h4>${garrisonMap[i].stop_title}</h4>
                
                ${garrisonMap[i].stop_content}
                </p>
                

        `
  

        /* html */
        listContent = `
        <tr class=${ i%2===0 ?  'even' :  'odd'}>
        <td>${i+1}. </td>
        <td>
            <strong>${garrisonMap[i].stop_title}</strong>
        </td>
        <td>
            <a class="remove_entry button" data-info="${garrisonMap[i]._id}">remove&nbsp;&times;</a>
            </td>
        </tr>
            
        `;

        $("#list__stops").append(listContent);


    m.bindPopup(popupContent,   {maxWidth : 560});

    markers.addLayer(m)
    
  
    //  allMarkers.push(marker)
  
  } 
  map.addLayer(markers)

   
  let firstpolyline = new L.Polyline(polyLine, {
    color: '#99997F',
    weight: 8,
    opacity: 0.75,
    smoothFactor: 1

    });
    map.addLayer(firstpolyline);
    


   bounds = new L.LatLngBounds(boundsArray);
  map.fitBounds(bounds)
  console.log(markers._layers[47])
    
})