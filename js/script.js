
let order= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
shuffle(order);

let pages = [];
  
    url = 'https://tba.codepanel.in/json/pages/';
    fetch(url)
  .then(response => response.json())
    .then(j => {
      

      

      $(".preamble--text").html(j[0].body)
  pages = [...j].splice(0,1)
  

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

    
    p.splice(6, 1);

//FOR EACH ARTICLE
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
    l = window.location.hash.replace("#","#link-");
    $(l).click();
  }

    $(".page-item").click(function(){
      //console.log(pages);
      console.log($(this).data("nid"))
      loadPage($(this).data("nid"))
      history.pushState('',"title", window.location.pathname+'#'+$(this).data("nid"));

    })



  function loadText(identity) {
      article = new Article(p[identity]);      
      $("body").append(article.displayFull);
  }

  function loadPage(nid) {
    
    for (var i=0; i < pages.length; i++) {
      
      if (parseInt(pages[i].nid) === nid) {
          page = new Page(pages[i]);
          console.log(page)
          history.pushState('',page.title, window.location.pathname+'#'+page.nid);

          $("body").append(page.displayFull)
      }
    }
  }


  


//   function loadPage(node) {
//     page = new Page(p[identity]);      
//     $("body").append(article.displayFull);
//     /* html */
    
    
//   let popout = `
//   <div class='popout'>
//       <div class="popout__menu">
//           <div class="popout__pub">M</div>
//           <div class="popout__close">&times;</div>
//       </div>
      
//       <div class="popout__interior">
//         <div class="popout__interior--left">
//             <h2>${j[0].title}</h2>
//             <br /><br />
//             ${j[0].body.replaceAll("/sites/default/files","https://tba.codepanel.in/sites/default/files")}
//           </div>
          
//       </div>
//   </div>
//   `
  
//   $(popout)
//   .appendTo("body")
// })
// }

$(document).on("click",".popout__pub",function(){

  



    $(".section__book-menu").fadeIn(200)

    // $(document).on("click",".section__book-menu",function(){
    //   $(this).fadeOut(200);
    // })

    $(document).keyup(function(e) {
      if (e.key === "Escape") { // escape key maps to keycode `27`
        $(".section__book-menu").fadeOut(200)
     }
 });


 


    $("#book-link-"+$(this).data('nid')).prop("checked", true);

    $(".section__book-content").addClass("active")

    $("input[type=checkbox]").each(function(){
      console.log("fire")
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
        $("#toggle-view").text("list view")
    } else {
        $("#toggle-view").text("network view")
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

  console.log($(fn).position().top)
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

