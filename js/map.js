let polyLine = [];
let allLocations = [];
let boundsArray = [];
  // setup a marker group
  var markers = L.layerGroup();
//console.log(garrisonMap)




let map = L.map('map', {
    center: [43.6514794,-79.4860513],
    zoom: 13,
    maxZoom: 24
  });
  
L.tileLayer(
    'https://api.mapbox.com/styles/v1/iamasq/ckupu32t50q5h14qkkmmewdvi/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWFtYXNxIiwiYSI6ImNrc296bmRvaDAxMGkydnBsNGcwMzQwdGcifQ.PkRl94Sjs9H2IM0auw-zdg', {
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
     loadStops(garrisonMap);
    
})


$("#lowerDonMap").click(function(){
  $(".active").removeClass("active")
  $(this).addClass("active")
   //map.removeLayer(markers);
   loadStops(lowerDonMap);
  
})



function loadStops(stops) {

for (var i=0; i<stops.length; i++) {
  var ll = (stops[i].place.replace("LatLng(","").replace(")","").split(","))
  // var lon = stops[i][0];
  // var lat = stops[i][1];
  // var popupText = stops[i][2];
  
  allLocations.push(stops[i])

  var mLocation = new L.LatLng(ll[0], ll[1]);
      var m = new L.CircleMarker(mLocation, {color: "#CC9B2C"}).on('click', function(e){
          $(".info").removeClass("active")
          targetInfo = "#map-sidebar-item-"+e.target._id;
          $(targetInfo).addClass("active")
          $("#map-sidebar").scrollTo(targetInfo,200)
      });
      m._id = stops[i]._id;

      polyLine.push(mLocation)
      boundsArray.push(mLocation)
   
      /* html */
      popupContent = `
              <h4>${stops[i].stop_title}</h4>
              
              ${stops[i].stop_content}
              </p>
              

      `

      $("#map-sidebar").append(`<li class="info" id="map-sidebar-item-${stops[i]._id}">${popupContent}</li>`)


      /* html */
      listContent = `
      <tr class=${ i%2===0 ?  'even' :  'odd'}>
      <td>${i+1}. </td>
      <td>
          <strong>${stops[i].stop_title}</strong>
      </td>
      <td>
          <a class="remove_entry button" data-info="${stops[i]._id}">remove&nbsp;&times;</a>
          </td>
      </tr>
          
      `;

      $("#list__stops").append(listContent);


  //m.bindPopup(popupContent,   {maxWidth : 560});

  markers.addLayer(m)
  

  //  allMarkers.push(marker)

} 
map.addLayer(markers)

 
let firstpolyline = new L.Polyline(polyLine, {
  color: '#CC9B2C',
  weight: 3,
  opacity: 0.95,
  smoothFactor: 1

  });
  map.addLayer(firstpolyline);
  


let  bounds = new L.LatLngBounds(boundsArray);
map.fitBounds(bounds)

}