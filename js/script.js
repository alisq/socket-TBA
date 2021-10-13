
let order= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
shuffle(order);

let biblio = {};

url = 'https://tba.codepanel.in/json/biblio/';
    fetch(url)
  .then(response => response.json())
    .then(j => {
      for (i=0;i<j.length;i++) {
        
        
        if (!(j[i].field_artist_s_ in biblio)==0) {
          j[i].nid != j[i-1].nid ? biblio[j[i].field_artist_s_].push(j[i]) : null;
          
      } else {
        biblio[j[i].field_artist_s_] = [j[i]];
      }
      
    }
    
      
    });
      


let pages = [];
  
    url = 'https://tba.codepanel.in/json/pages/';
    fetch(url)
  .then(response => response.json())
    .then(j => {
      

      

      $(".preamble--text").html(j[0].body)
      //$(".preamble--cover").fadeIn(200)
  pages = [...j]
  //console.log(pages)

  for (i=0;i<j.length;i++) {
    let item = new Page(j[i]);
    $(".section__book-menu--interior-top").append(item.displayBookMenu+"<br />")

    //CREATE ACTUAL BOOK TEXT (THIS NEEDS WORK)
  $(".section__book-content").append(item.displayBookContent)
  }
  
    });
  
  
  
  url = 'https://tba.codepanel.in/json/articles';
fetch(url)
  .then(response => response.json())
  .then(p => {

    
    
    
p.splice(1,1)
//p.splice(2,1)

for(i=0;i<p.length;i++) {
  p[i].identity = i;
  
    
  let item = new Article(p[i]);

  //CREATE INITIAL LIST ITEM
  $(item.displayList)
      .appendTo(".section__main--list")
    

  //CREATE CREATE ITEM FOR BOOK MENU
  $(".section__book-menu--interior-bottom").append(item.displayBookMenu+"<br />")


  //CREATE ACTUAL BOOK TEXT (THIS NEEDS WORK)
  $(".section__book-content").append(item.displayBookContent)
  
}


$(".footer__menu").click(function(){
  $(this).toggleClass("active");
})


  
//ADD LIST CLICK
$(".section__main--list li")

  .click(function(){
    loadText($(this).data("item"));
  }).each(function(index){
    $(this)  .css({
        
      "order":order[index]
    })
  });



  
//checking on the checkboxes
$("input[type=checkbox]").change(function(){
  
  AC = "#book-article-"+$(this).data("nid");
  if ($(this).is(':checked')) {
    $(AC).addClass("active");

  } else {
    $(AC).removeClass("active");
  }
})



//UPON PAGE LOAD CLICK ON APPROPRIATE LINK BASED ON URL HASH
  if (window.location.hash != '') {
    l = "#link-"+window.location.hash.split("-")[1];
    console.log(l)
    setTimeout(function(){
      $(l).click();
    },200)
    
  }

    $(".page-item").click(function(e){
      e.preventDefault();
      //console.log(pages);
      
      loadPage($(this).data("nid"))
      
      


    })

    $(".biblio-item").click(function(){
      //console.log(pages);
      
      loadBiblio();
      //history.pushState('bibliography',"bibliography", '#bibliography');
      history.pushState('',"title", window.location.pathname+'#biblio');

    })



  function loadText(identity) {
      article = new Article(p[identity]);      
      $("body").append(article.displayFull);
  }

  function loadPage(nid) {
      
    for (var i=0; i < pages.length; i++) {
      
      if (parseInt(pages[i].nid) === nid) {
          page = new Page(pages[i]);
          
          //history.pushState('',page.title, window.location.pathname+'#'+page.nid);

          $("body").append(page.displayFull)
      }
    }
  }


  function loadBiblio() {


    c = ""
    for (var key of Object.keys(biblio)) {
      
      c += '<h3>'+key+'</h3>';
      for (i=0;i<biblio[key].length;i++) {
        c+=('<li>'+biblio[key][i].body+'</li>')
      }
  }

    let popout = `
    <div class='popout' id='popout__bibliography'>
        <div class="popout__menu">
        <div class="popout__pub" data-nid="${this.nid}"><img class="popout__menu--img" src="img/book.svg">
        </div>
            <div class="popout__close">&times;</div>
        </div>
        
        <div class="popout__interior">
        
              <div class="popout__interior--grid">    
          <div class="popout__interior--grid-left">
           
          <h2>Bibliography
          
          </h2>
    
              <br /><br />
              ${c}
            </div>
            <div class="popout__interior--grid-right">
            
          </div>
          </div>
        </div>
    </div>
    `

    $("body").append(popout)
    
  }


  
 $(".section__book-menu .popout__close").click(function(){

     $(".section__book-menu").fadeOut(200)
     $(".section__book-content").removeClass("active");
    })


$(document).on("click",".popout__pub",function(){

  



    $(".section__book-menu").fadeIn(200)

    // $(document).on("click",".section__book-menu",function(){
    //   $(this).fadeOut(200);
    // })

    $(document).keyup(function(e) {
      if (e.key === "Escape") { // escape key maps to keycode `27`
        $(".section__book-menu").fadeOut(200)
        $(".section__book-content").removeClass("active")
     }
     

 });


 


    $("#book-link-"+$(this).data('nid')).prop("checked", true);

    $(".section__book-content").addClass("active")

    $("input[type=checkbox]").each(function(){
      
      AC = "#book-article-"+$(this).data("nid");
      if ($(this).is(':checked')) {
        $(AC).addClass("active");
    
      } else {
        $(AC).removeClass("active");
      }
    })

    

})



$(document).on("click",".page-item-make-book",function(){

  



  $(".section__book-menu").fadeIn(200)

  // $(document).on("click",".section__book-menu",function(){
  //   $(this).fadeOut(200);
  // })

  $(document).keyup(function(e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
      $(".section__book-menu").fadeOut(200)
   }
});


$(".book-link").prop("checked", true);

    $(".section__book-content").addClass("active")

    $("input[type=checkbox]").each(function(){
  
      AC = "#book-article-"+$(this).data("nid");
      if ($(this).is(':checked')) {
        $(AC).addClass("active");
    
      } else {
        $(AC).removeClass("active");
      }
    })
});


  $(document).on("click","#toggle-view",function(){
    $(".section__main--list").toggleClass("random");

    if ($(".section__main--list").hasClass("random")) {
        $("#toggle-view").text("View as List")
    } else {
        $("#toggle-view").text("View as Network")
    }
  })


  $(document).on("click",".popout__close",function(){

    $(".preamble--cover").fadeOut(100);
    $(".popout").remove();
    title = 'TBA | Programs Publication';
    $("title").html(title)
    history.pushState('', title, window.location.pathname);
  })
  
  $(document).on("click",".preamble--cover", function(){
      $(this).fadeOut(100);
  });

})
  
$(document).on("click","h1",function(){
  if ($(".popout").length > 0) {
    $(".popout").remove();
    title = 'TBA | Programs Publication';
    $("title").html(title)
    history.pushState('', title, window.location.pathname);
  }
  
})




$(document).on("click",".see-footnote",function(e){
  e.preventDefault();
  fn = "#"+$(this).attr("id").replace("ref","");

  
  $(document).scrollTo("100%", 200)
  // footnoteref2_jqc03ke
  // footnote1_ptp15bx
})


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// setTimeout(function(){
//   // $(".page-item-make-book").click()
//   // $('input[type="checkbox"]').prop('checked', false); // Unchecks it
//   // $("#book-link-6").prop('checked',true)

//   $(".section__book-content").addClass("active");
//   $(".section__book-content--article").removeClass("active");
//   $("#book-article-57").addClass("active");
//   $("#make-book").click()
  
// },1000);
