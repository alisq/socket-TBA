
let pages = [];
  
    url = 'https://tba.codepanel.in/json/pages/';
    fetch(url)
  .then(response => response.json())
    .then(j => {
  pages = [...j]

  for (i=0;i<j.length;j++) {
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

//FOR EACH ARTICLE
for(i=0;i<p.length;i++) {
  p[i].identity = i;
    
  let item = new Article(p[i]);

  //CREATE INITIAL LIST ITEM
  $(item.displayList)
      .appendTo(".section__main--list")
      .css({
        "left":Math.floor(Math.random()*($(window).width()-300)),
        "top":120+Math.floor(Math.random()*($(window).height()-240))
      });

  //CREATE CREATE ITEM FOR BOOK MENU
  $(".section__book-menu--interior-bottom").append(item.displayBookMenu+"<br />")


  //CREATE ACTUAL BOOK TEXT (THIS NEEDS WORK)
  $(".section__book-content").append(item.displayBookContent)
  
}

  //ADD BUTTON TO BOOK MENU
  

  
//ADD LIST CLICK
$(".section__main--list li").click(function(){
  loadText($(this).data("item"));
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
    })



  function loadText(identity) {
      article = new Article(p[identity]);      
      $("body").append(article.displayFull);
  }

  function loadPage(nid) {
    
    for (var i=0; i < pages.length; i++) {
      console.log(pages[i].nid)
      if (parseInt(pages[i].nid) === nid) {
          page = new Page(pages[i]);
          console.log(page)
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



    $("#book-link-"+$(this).data('nid')).prop("checked", true);

    $(".section__book-content").addClass("active")

    $("input[type=checkbox]").each(function(){
  
      AC = "#book-article-"+$(this).data("nid");
      if ($(this).is(':checked')) {
        $(AC).addClass("active");
    
      } else {
        $(AC).removeClass("active");
      }


      $(document).keyup(function(e) {
        if (e.key === "Escape") { // escape key maps to keycode `27`
          $(".section__book-content").removeClass("active")
          $(".section__book-menu").fadeOut(200)
  
       }
   });
  
  
    })

    

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
    title = 'TBA | Title TK';
    $("title").html(title)
    history.pushState('', title, window.location.pathname);
  })

})
  