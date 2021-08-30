
pos = [];
points = [];





url = 'https://tba.codepanel.in/json/articles';
  fetch(url)
.then(response => response.json())
  .then(p => {
console.log(p)








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
  <li data-item='${i}' id='link-${p[i].nid}' data-nid='${p[i].nid}'>${p[i].field_artist_s_}<br />${p[i].title}</li>
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



  })

  if (window.location.hash != '') {
    l = window.location.hash.replace("#","#link-");
    $(l).click();
  }

    $(".pull-data").click(function(){
      
      loadPage($(this).data("nid"))
    })



  function loadText(item) {


console.log(p[item])
    

    title =  p[item].title+" — "+p[item].field_artist_s_;
    $("title").text(title)
    history.pushState('',title, window.location.pathname+'#'+p[item].nid);


      
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
        
              <div class="popout__interior--grid">    
          <div class="popout__interior--grid-left">
          <div class="editorial">${content.field_editorial}</div>
          <h2>${content.field_artist_s_}<br />
              ${content.title}</h2>

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


$(document).on("click",".popout__pub",function(){
  Bindery.makeBook({ content: '#content' });
})

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
    history.pushState('', document.title, window.location.pathname);
  })

})
  