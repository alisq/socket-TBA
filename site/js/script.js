



url = 'https://tba.codepanel.in/json/articles';
  fetch(url)
.then(response => response.json())
  .then(p => {






//FOR EACH ARTICLE
for(i=0;i<p.length;i++) {
  p[i].identity = i;
  
  
  let item = new Article(p[i]);

  //CREATE INITIAL LIST ITEM
  $(".section__main--list").append(item.displayList)

  //CREATE CREATE ITEM FOR BOOK MENU
  $(".section__book-menu--interior").append(item.displayBookMenu+"<br />")


  //CREATE ACTUAL BOOK TEXT (THIS NEEDS WORK)
  $(".section__book-content").append(item.displayBookContent)
  
}

  //ADD BUTTON TO BOOK MENU
  $(".section__book-menu--interior").append(' <button id=make-book>Make Book</button>')




    
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

    $(".pull-data").click(function(){
      
      loadPage($(this).data("nid"))
    })



  function loadText(identity) {
      article = new Article(p[identity]);      
      $("body").append(article.displayFull);
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
    })

    
    
})


$(document).on("click","#make-book",function(){

  //$(".section__book-content").css("display","block")
  let c =  ".section__book-content.active";
  //let c = "#book-contents";
  
    
    Bindery.makeBook({ content:c });
    
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
  