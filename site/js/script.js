url = 'https://tba.codepanel.in/json/articles';
  fetch(url)
.then(response => response.json())
  .then(p => {
console.log(p)




articles = [{nid: 1, authors: "Haruko Okano with Ayumi Goto, Cheryl Trudeau, Elwood Jimmy, and Peter Morin",
title: "edited transcript from Six Chairs in a Circle (2019)"},
{nid: 2, authors: "Diane Borsato",
title:"YOU ARE A GOOD APPLE (2019)"},
{nid: 3, authors:"Anu Radha Verma",
title:"essay"},
{nid: 4, authors:"Gendai Gallery",
title:"reflection on methodology"}]

pos = [];
points = [];



// Vue.component('text-item', {
//     props: ['title', 'field_artist_s_', 'nid'],
//     template: '<li v-bind:data-nid="nid">{{field_artist_s_}}<br />{{ title }}</li>'
//   })

//   // Define a new component called button-counter
//   const app = new Vue({
//     el: '.section__main--list',
//     data: {
//       posts: p
//     },
    
//   })


for(i=0;i<p.length;i++) {
  let item = `
  <li data-item='${i}' data-nid="${p[i].nid}">${p[i].field_artist_s_}<br />${p[i].title}</li>
  `
  $(".section__main--list").append(item)

}

  $(".section__main--list li").each(function(){


    let r = Math.floor(Math.random()*20);

    let fromTop, fromLeft;
    
    while(!pos.includes(r)) {
        r = Math.floor(Math.random()*20);
        pos.push(r)

        console.log("orig: "+r)

        t = (Math.floor(r/5))
        l = (Math.floor(r%5))
//        if (l == 0) { l = 5 }

         fromTop = t*($(window).height()/5)+100;
         fromLeft = l*($(window).width()/6)+20;
         //console.log("top "+fromTop)
         console.log("left "+fromLeft)
    }
    
    
    
    //console.log(r)

    

    // fromTop = Math.floor(Math.random()*4)*($(window).height()/5)+100;
    // fromLeft = Math.floor(Math.random()*4)*($(window).width()/4)+20;
    points.push({"x":fromLeft,"y":fromTop})
    $(this).css({
            "top":fromTop,
            "left":fromLeft

        }).click(function(){
            loadText($(this).data("item"));
        });


  })

    $(".pull-data").click(function(){
      
      loadPage($(this).data("nid"))
    })

  function loadText(item) {


      
      $(".popout").remove();
      /* html */
      content = p[item];
      
    let popout = `
    <div class='popout'>
        <div class="popout__menu">
            <div class="popout__pub">M</div>
            <div class="popout__close">&times;</div>
        </div>
        
        <div class="popout__interior">
        <h2>${content.field_artist_s_}<br />
              ${content.title}</h2>

              <div class="popout__interior--grid">    
          <div class="popout__interior--grid-left">
          <div class="editorial">${content.field_editorial}</div>
              <br /><br />
              ${content.field_article_contents.replaceAll("/sites/default/files","https://tba.codepanel.in/sites/default/files")}
            </div>
            <div class="popout__interior--grid-right">
            ${content.body}
          </div>
          </div>
        </div>
    </div>
    `
    
    $(popout)
    .appendTo("body")
  }



  function loadPage(node) {
    url = 'https://tba.codepanel.in/json/page/'+node;
    fetch(url)
  .then(response => response.json())
    .then(j => {
  console.log(j)
  

      
    $(".popout").remove();
    /* html */
    
    
  let popout = `
  <div class='popout'>
      <div class="popout__menu">
          <div class="popout__pub">M</div>
          <div class="popout__close">&times;</div>
      </div>
      
      <div class="popout__interior">
        <div class="popout__interior--left">
            <h2>${j[0].title}</h2>
            <br /><br />
            ${j[0].body.replaceAll("/sites/default/files","https://tba.codepanel.in/sites/default/files")}
          </div>
          
      </div>
  </div>
  `
  
  $(popout)
  .appendTo("body")
})
}


  $(document).on("click","#toggle-view",function(){
    $(".section__main--list").toggleClass("random");

    if ($(".section__main--list").hasClass("random")) {
        $("#toggle-view").text("list view")
    } else {
        $("#toggle-view").text("network view")
    }
  })


  $(document).on("click",".popout__close",function(){
    $(".popout").remove();
  })

})
  /*
RANDOM GROWTH
Jeff Thompson | 2019/20 | jeffreythompson.org

The simulating of natural systems is a perfect fit
for object-oriented programming. Populations of
animals interacting with each other, terrain of
different types, etc. In this example, a simplified
fungus starts in the center of the screen, randomly
growing out. Periodically it splits in two. After 
it reaches a certain age, the branch dies.

Use 'p' key to pause/continue the growth, or any
other key to restart the process.

A more rigorous scientific simulation would involve
tons of research into fungal growth, etc, but even
this version, more "inspired by" natural phenomena
than simulating it, produces exciting and varied
visual output.

For way more on this topic, see Daniel Shiffman's
excellent online book "Nature of Code".

CHALLENGES:
+ Can you make the sketch save an image every time
  it resets? Can you make the filenames a unique
  timestamp so they don't overwrite every time?
+ Can you make the tendrils change color as they
  get older? (Hint: use the "age" variable and map())
+ Could you add a random "bloom" that periodically
  gets added to the tendril?

*/

var font;

let maxAge = 200;          // tendrils older than this will
                           // be removed – try changing!

let paused = false;        // use 'p' to pause/un-pause

let fungi;                 // list of objects

// function preload() {
// 	font = loadFont('../css/fonts/Calibre-Regular.otf')
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // draw the background in setup(), since after
  // that every frame draws on top of the previous
  //background(255);
  //textFont(font)
	textSize(300);
  // create a bunch of Fungus objects growing
  // from the center
  fungi = [];

//   var points = font.textToPoints('TOOLS FOR',100, 400, 300,{
//     sampleFactor: 0.25,
//     simplifyThreshold: 0
//   });

  allPoints = [...points]
  console.log(allPoints)
	for(i=0; i<allPoints.length;i++) {
		// var vehicle = new Vehicle(points[i].x,points[i].y )
		// vehicles.push(vehicle)
    let f = new Fungus(allPoints[i].x,allPoints[i].y )
    fungi.push(f);

    
	}
}


function draw() {
  
  // if not paused (ie running)...
  if (!paused) {
    
    // go through all Fungus objects
    // must be in reverse so we can delete
    // objects as we go (otherwise, we might delete
    // one, then try to draw it, causing an error!)
    for (let i=fungi.length-1; i>=0; i-=1) {
      
      // get the current object
      let f = fungi[i];
      
      // update and, if it has reached a
      // certain radius or is too old, remove it
      f.update();
      if (f.distFromCenter >= f.maxDistance || f.age > maxAge) {
        fungi.splice(i, 1);
      }
      
      // draw it onscreen
      f.display();
    }
    
    // if the simulation starts to bog down,
    // start over automatically
    if (frameRate < 30) {
      setup();
    }
  }
}


function keyPressed() {
  // p = pause/un-pause
  if (key === 'p') {
    paused = !paused;
  }
  
  // // all other keys resets the sketch
  // else {
  //   setup();
  // }
}

