
var socket = io();
var allClicks = []

fakeDB = [
{"time":1622996767342,"clicks":[{"title":"Title number 2","xPos":772,"yPos":113}],"_id":"2Ix74HATuQYVLliA"},
{"time":1622996801577,"clicks":[{"title":"Title number 5","xPos":963,"yPos":549},{"title":"Title number 6","xPos":1146,"yPos":478},{"title":"Title number 4","xPos":176,"yPos":608},{"title":"Title number 1","xPos":236,"yPos":270},{"title":"Title number 2","xPos":748,"yPos":235},{"title":"Title number 8","xPos":789,"yPos":805},{"title":"Title number 5","xPos":960,"yPos":550},{"title":"Title number 5","xPos":990,"yPos":614},{"title":"Title number 5","xPos":955,"yPos":603},{"title":"Title number 5","xPos":943,"yPos":641},{"title":"Title number 8","xPos":932,"yPos":707},{"title":"Title number 8","xPos":761,"yPos":777},{"title":"Title number 8","xPos":530,"yPos":776},{"title":"Title number 5","xPos":619,"yPos":553},{"title":"Title number 5","xPos":631,"yPos":434}],"_id":"56yiSrbf1NCjUbPS"},
{"time":1622994559154,"clicks":[{"title":"Title number 1","xPos":356,"yPos":208},{"title":"Title number 4","xPos":440,"yPos":569},{"title":"Title number 5","xPos":845,"yPos":548},{"title":"Title number 2","xPos":904,"yPos":308},{"title":"Title number 3","xPos":1222,"yPos":188},{"title":"Title number 6","xPos":1324,"yPos":530},{"title":"Title number 9","xPos":1302,"yPos":745},{"title":"Title number 8","xPos":698,"yPos":906},{"title":"Title number 7","xPos":216,"yPos":900},{"title":"Title number 4","xPos":194,"yPos":588},{"title":"Title number 1","xPos":252,"yPos":232},{"title":"Title number 2","xPos":637,"yPos":150}],"_id":"5JZ6EHmY5jfMgF3V"},
{"time":1622997401619,"clicks":[{"title":"Title number 1","xPos":318,"yPos":127},{"title":"Title number 3","xPos":1274,"yPos":217},{"title":"Title number 6","xPos":1309,"yPos":680},{"title":"Title number 5","xPos":627,"yPos":702},{"title":"Title number 4","xPos":275,"yPos":726},{"title":"Title number 4","xPos":285,"yPos":392},{"title":"Title number 7","xPos":356,"yPos":867},{"title":"Title number 8","xPos":813,"yPos":862},{"title":"Title number 5","xPos":831,"yPos":85},{"title":"Title number 3","xPos":1314,"yPos":125},{"title":"Title number 6","xPos":1455,"yPos":718},{"title":"Title number 1","xPos":46,"yPos":153},{"title":"Title number 6","xPos":1268,"yPos":827},{"title":"Title number 9","xPos":1271,"yPos":923},{"title":"Title number 8","xPos":934,"yPos":355},{"title":"Title number 4","xPos":69,"yPos":545},{"title":"Title number 1","xPos":383,"yPos":215}],"_id":"76jT1QRdeEnfwQ0k"},
{"time":1622996716591,"clicks":[{"title":"Title number 3","xPos":1133,"yPos":279},{"title":"Title number 6","xPos":1242,"yPos":546},{"title":"Title number 4","xPos":27,"yPos":609},{"title":"Title number 1","xPos":254,"yPos":114},{"title":"Title number 8","xPos":788,"yPos":834},{"title":"Title number 9","xPos":1236,"yPos":851},{"title":"Title number 6","xPos":1132,"yPos":617},{"title":"Title number 2","xPos":781,"yPos":184}],"_id":"AIEee5l4cXJfbNLg"},
{"time":1622997085559,"clicks":[{"title":"Title number 1","xPos":215,"yPos":278},{"title":"Title number 2","xPos":786,"yPos":225},{"title":"Title number 2","xPos":641,"yPos":429}],"_id":"Ehs7IWWYBAaUPOTb"},
{"time":1622997000094,"clicks":[{"title":"Title number 1","xPos":294,"yPos":266},{"title":"Title number 6","xPos":1239,"yPos":711},{"title":"Title number 5","xPos":710,"yPos":801},{"title":"Title number 4","xPos":366,"yPos":818},{"title":"Title number 1","xPos":305,"yPos":463},{"title":"Title number 2","xPos":927,"yPos":247},{"title":"Title number 3","xPos":1294,"yPos":292},{"title":"Title number 6","xPos":1341,"yPos":783},{"title":"Title number 2","xPos":681,"yPos":378},{"title":"Title number 2","xPos":896,"yPos":296},{"title":"Title number 3","xPos":1177,"yPos":364},{"title":"Title number 1","xPos":248,"yPos":333},{"title":"Title number 1","xPos":425,"yPos":196}],"_id":"I6KAXndmTCoTUGay"},
{"time":1622997219746,"clicks":[{"title":"Title number 1","xPos":321,"yPos":155},{"title":"Title number 1","xPos":321,"yPos":155},{"title":"Title number 2","xPos":1154,"yPos":536},{"title":"Title number 2","xPos":1154,"yPos":536}],"_id":"MSbrPLkrcld93XI3"},
{"time":1622997063230,"clicks":[{"title":"Title number 1","xPos":376,"yPos":177},{"title":"Title number 1","xPos":389,"yPos":176},{"title":"Title number 1","xPos":290,"yPos":159},{"title":"Title number 2","xPos":681,"yPos":182},{"title":"Title number 1","xPos":298,"yPos":353},{"title":"Title number 2","xPos":656,"yPos":352},{"title":"Title number 1","xPos":382,"yPos":343},{"title":"Title number 2","xPos":710,"yPos":508},{"title":"Title number 2","xPos":709,"yPos":508},{"title":"Title number 2","xPos":840,"yPos":244},{"title":"Title number 1","xPos":343,"yPos":283}],"_id":"YhOwKoLKfphk63x3"}
]


//    socket.emit('chat message', input.value);

  
socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });

  $(document).on("click",".entry",function(e){
    $(".active").not(this).removeClass("active");
    $(this).toggleClass("active");

    var clickData = {
        title :  $(this).find("h2").text(),
        xPos : e.clientX,
        yPos : e.clientY
        }
    allClicks.push(clickData)
    $("svg").remove();
    //var draw = SVG().addTo('body').attr("id","pathThrough")
    //var line = draw.line(0, 0, 100, 150)

    plots = [];
    for (i=0;i<allClicks.length;i++) {
        plots.push([allClicks[i].xPos, allClicks[i].yPos])
        
        $(`<div class='prevClick'>${allClicks[i].title}</div>`)
            .css({
                "top":allClicks[i].yPos+3,
                "left":allClicks[i].xPos+3
            })
            .appendTo("body")
    }
    //var polyline = draw.polyline(plots).stroke({ width: 2, color: '#F00' }).fill("none")
  
    socket.emit('clicked', {user: socket._id, clicks: allClicks});
        
  
  });

$(document).on("click","#past_clicks",function() {
    fakeDB.forEach(function(entry) {
        console.log(entry);
        var draw = SVG().addTo('body').attr("id","p_"+entry._id)
    //var line = draw.line(0, 0, 100, 150)

    plots = [];
    for (i=0;i<entry.clicks.length;i++) {
        plots.push([entry.clicks[i].xPos, entry.clicks[i].yPos])
        
        $(`<div class='prevClick'>${entry.clicks[i].title}</div>`)
            .css({
                "top":entry.clicks[i].yPos+3,
                "left":entry.clicks[i].xPos+3
            })
            .appendTo("body")
    }
    var polyline = draw.polyline(plots).stroke({ width: 2, color: '#F00' }).fill("none")
  
    });
})


$(document).on("click","#other_visitors",function() {
    $("#cursor1").css("display","block");
});