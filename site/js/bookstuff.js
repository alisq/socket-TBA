




$(document).on("click","#make-book",function(){

    //$(".section__book-content").css("display","block")
    let c =  ".section__book-content.active";
    //let c = "#book-contents";
    

    let runningHeaders = Bindery.RunningHeader({
        render: (page) => page.isLeft
          ? `${page.number} · Jan Tschichold`
          : `Publication Title · ${page.number}`
      });
      
    
      
      Bindery.makeBook({ 
          content:c,
          view: Bindery.View.PRINT,
          printSetup: { layout: Bindery.Layout.PAGES },
          rules: [runningHeaders],
          pageSetup: {
            size: { width: '8.5in', height: '11in' },
            
            margin: { top: '36pt', inner: '108pt', outer: '108pt', bottom: '36pt' },
          },
        
        });
      
  })