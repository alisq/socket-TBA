class Article {
    constructor(content) {
        this.nid = content.nid;
        this.identity = content.identity;
        this.contents = content.field_article_contents.replaceAll("/sites/default/files","https://tba.codepanel.in/sites/default/files");;
        this.editorial_author = content.field_intro_text_author;
        this.editorial = content.field_editorial;
        this.artists = content.field_artist_s_;
        this.title = content.title;
        this.bio = content.body;
        this.image = content.field_image.replaceAll("/sites/default/files","https://tba.codepanel.in/sites/default/files");
        this.image_caption = $(this.image).attr('alt');
        
      
    }

    get displayList() {
        let item = `<li data-item='${this.identity}' id='link-${this.nid}' data-nid='${this.nid}'>${this.artists}<br />${this.title}</li>`
        return item;
    }

    get displayBookMenu() {
        let item = `<input type='checkbox' id='book-link-${this.nid}' data-nid='${this.nid}'> <label for='book-link-${this.nid}' >${this.artists} — ${this.title}</label>`
        return item;
    }

    get displayBookContent() {
        
        /* html */
        let item = `<div class="section__book-content--article" id="book-article-${this.nid}">
                        <h2>${this.artists}<br /> ${this.title}</h2>
                    
                        <div class="book--editorial">
                            
                            
                                ${this.editorial}
                                <div class="editorial--author">&mdash;${this.editorial_author}</div>
                            </div>
                        </div>
                        
                        <div class="lead__image">
                            ${this.image}
                            <div class="lead__image--caption">
                                ${this.image_caption}
                            </div>
                        </div>

                        ${this.contents}
                                            
                        <div class="popout__interior--biography">
                            ${this.bio}
                        </div>
                    </div>`;
        return item;
    }

    


    get displayFull() {


        let title =  this.title+" — "+this.artists;
        $("title").text(title)
        history.pushState('',title, window.location.pathname+'#'+this.nid);

        $(".popout").remove();

        /* html */
       let popout = `
        <div class='popout' id='popout__${this.nid}'>
            <div class="popout__menu">
                <div class="popout__pub" data-nid="${this.nid}"><img class="popout__menu--img" src="img/book.svg">
                </div>
                <div class="popout__close">&times;</div>
            </div>
            
            <div class="popout__interior">
            
                  <div class="popout__interior--grid">    
              <!-- <div class="popout__interior--grid-left"> -->

              <h2>${this.artists}<br />
              ${this.title}</h2>

              <div class="editorial">
                    <div class="editorial--illustration">
                        <img src="${"img/editorial--illustration"+Math.floor(Math.random()*2)+".png"}" />
                    </div>
                    <div class="editorial--content">
                        ${this.editorial}
                        <div class="editorial--author">&mdash;${this.editorial_author}</div>
                    </div>
              </div>
              
        
                <div class="lead__image">
                  ${this.image}
                    <div class="lead__image--caption">
                        ${this.image_caption}
                    </div>
                </div>
                  ${this.contents}
                <!-- </div>
                <div class="popout__interior--grid-right">-->
                <div class="popout__interior--biography">
                    ${this.bio}
                </div>
            <!--   </div> -->
              </div>
            </div>
        </div>
        `

        return popout;
    }

    
}


