




$(document).on("click","#make-book",function(){

    //$(".section__book-content").css("display","block")
    let c =  ".section__book-content.active";
    //let c = "#book-contents";
    

    let runningHeaders = Bindery.RunningHeader({
        render: (page) =>  {return `<div class="book__head--left">Toronto Biennial of Art</div>  <div class="book__head--center">${page.number}</div> <div class="book__head--right">Programs Publication</div>` }
          
      });
      

      let breakRule = Bindery.PageBreak({
        selector: 'h2aaaaa',
        position: 'before',
      });
      
      let spreadRule = Bindery.FullBleedSpread({
        selector: '.big-figure',
      });
    
      
      Bindery.makeBook({ 
          content:c,
          view: Bindery.View.PRINT,
          printSetup: { layout: Bindery.Layout.PAGES },
          rules: [runningHeaders, breakRule, spreadRule],
          pageSetup: {
            size: { width: '8.5in', height: '11in' },
            
            margin: { top: '72pt', inner: '0pt', outer: '0pt', bottom: '36pt' },
          },
        
        });
      
  })