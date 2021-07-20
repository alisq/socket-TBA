articles = [{nid: 1, authors: "Haruko Okano with Ayumi Goto, Cheryl Trudeau, Elwood Jimmy, and PeterMorin",
title: "edited transcript from Six Chairs in a Circle (2019)"},
{nid: 2, authors: "Diane Borsato",
title:"YOU ARE A GOOD APPLE (2019)"},
{nid: 3, authors:"Anu Radha Verma",
title:"essay"},
{nid: 4, authors:"Gendai Gallery",
title:"reflection on methodology"}]



Vue.component('text-item', {
    props: ['title', 'authors', 'nid'],
    template: '<li v-bind:data-nid="nid">{{authors}}<br />{{ title }}</li>'
  })

  // Define a new component called button-counter
  const app = new Vue({
    el: '.section__main--list',
    data: {
      posts: articles
    },
    
  })

  $(".section__main--list li").each(function(){
    fromTop = Math.floor(Math.random()*4)*($(window).height()/5)+100;
    fromLeft = Math.floor(Math.random()*4)*($(window).width()/4)+20;
    $(this).css({
            "top":fromTop,
            "left":fromLeft

        }).click(function(){
            loadText($(this).data("nid"));
        });


  })


  function loadText(nid) {
      console.log(nid)
      $(".popout").remove();
      /* html */
      content = articles[nid];
      
    let popout = `
    <div class='popout'>
        <div class="popout__close">&times;</div>
        <div class="popout__interior">
            <h2>${content.authors}<br />
            ${content.title}</h2>
        </div>
    </div>
    `
    
    $(popout)
    .appendTo("body")
  }

  $(document).on("click","#toggle-view",function(){
    $(".section__main--list").removeClass("random")
  })


  $(document).on("click",".popout__close",function(){
    $(".popout").remove();
  })