



url = 'https://tba.codepanel.in/json/articles';
  fetch(url)
.then(response => response.json())
  .then(p => {






//FOR EACH ARTICLE
for(i=0;i<p.length;i++) {
  
  //CREATE INITIAL LIST ITEM
  let item = `<li data-item='${i}' id='link-${p[i].nid}' data-nid='${p[i].nid}'>${p[i].field_artist_s_}<br />${p[i].title}</li>`
  

  //CREATE CREATE ITEM FOR BOOK MENU
  let bookMenuItem = `
    <input type='checkbox' id='book-link-${p[i].nid}' data-nid='${p[i].nid}'> <label for='book-link-${p[i].nid}' >${p[i].field_artist_s_} — ${p[i].title}</label><br />
  `;

  //CREATE ACTUAL BOOK TEXT (THIS NEEDS WORK)
  let bookItem = `${p[i].field_artist_s_} — ${p[i].title}<br /><br />${p[i].body}`;


  //APPEND EACH ITEM TO APPROPRIATE MENU
  $(".section__main--list").append(item)
  $(".section__book-menu--interior").append(bookMenuItem)
  $(".section__book-content").append(bookItem)

}


$(".section__book-menu--interior").append(' <button id=make-book>Make Book</button>')



    

$(".section__main--list li").click(function(){
            loadText($(this).data("item"));
        });


  if (window.location.hash != '') {
    l = window.location.hash.replace("#","#link-");
    $(l).click();
  }

    $(".pull-data").click(function(){
      
      loadPage($(this).data("nid"))
    })



  function loadText(item) {



    title =  p[item].title+" — "+p[item].field_artist_s_;
    $("title").text(title)
    history.pushState('',title, window.location.pathname+'#'+p[item].nid);


      
      $(".popout").remove();
      /* html */
      content = p[item];
      
    let popout = `
    <div class='popout'>
        <div class="popout__menu">
            <div class="popout__pub" data-nid="${p[item].nid}">M</div>
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
    $(".section__book-menu").fadeIn(200)
    //console.log()

    $("#book-link-"+$(this).data('nid')).prop("checked", true);
})


$(document).on("click","#make-book",function(){

  $(".section__book-content").css("display","block")
  setTimeout(function(){
    Bindery.makeBook({ content: '.section__book-content' });
  },5000)
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
  