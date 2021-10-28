let polyLine = [];
let allLocations = [];
let boundsArray = [];
  // setup a marker group
  var markers = L.layerGroup();
//console.log(garrisonMap)
let allStopsGroup = L.layerGroup();



let map = L.map('map', {
    center: [43.6514794,-79.4860513],
    zoom: 13,
    maxZoom: 54
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
  $("#map-sidebar").empty();
  markers.clearLayers();  
  boundsArray = [];
  polyLine = [];
  $("#map-sidebar").append(`<li class="info active" id="map-sidebar-item">${stops[0].stop_content}</li>`)
for (var i=1; i<stops.length; i++) {
  var ll = (stops[i].place.replace("LatLng(","").replace(")","").split(","))
  
  
  allLocations.push(stops[i])

  var mLocation = new L.LatLng(ll[0], ll[1]);
      var m = new L.CircleMarker(mLocation, {color: "#CC9B2C", weight: 4,fillColor: 'green'}).on('click', function(e){
          $(".info").removeClass("active")
          targetInfo = "#map-sidebar-item-"+e.target._id;
          $(targetInfo).addClass("active")
          $("#map-sidebar").scrollTo(targetInfo,200)
      })
      
      m.on('mouseover',function(ev) {
        this.setStyle({weight: 8});
      }).on('mouseout',function(ev) {
        this.setStyle({weight: 4});
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


  markers.addLayer(m)
  

} 

let firstpolyline = new L.Polyline(polyLine, {
  color: '#CC9B2C',
  weight: 3,
  opacity: 0.95,
  smoothFactor: 1

  });

map.addLayer(firstpolyline);
map.addLayer(markers)
  


let  bounds = new L.LatLngBounds(boundsArray);
map.fitBounds(bounds)

}