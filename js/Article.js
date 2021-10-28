class Article {
    constructor(content) {
        this.nid = content.nid;
        this.identity = content.identity;
        this.contents = content.field_article_contents;
        this.editorial_author = content.field_intro_text_author;
        this.editorial_illustration = content.field_editorial_image;
        this.editorial = content.field_editorial;
        this.artists = content.field_artist_s_;
        this.title = content.title;
        this.bio = content.body;
        this.audio = content.field_audio_files.split(", ");
        this.image = content.field_image;
        this.image_caption = $(this.image).attr('alt');
        if (this.image_caption == undefined) {
            this.image_caption="";
        }
        this.bookSafeContents = this.contents.replaceAll('<iframe id="lostRiversMap" src="lostRiversMap.html" title="Lost Rivers Map"></iframe>',"").replaceAll('<iframe id="taguibaoMap" scrolling="no" src="taguibaoMap.html" title="Caitlyn Taguibao Interactive Mural"></iframe>',"")
        
      
    }

    get displayList() {
        let item = `<li class="article-list" data-item='${this.identity}' id='link-${this.nid}' data-nid='${this.nid}'><span class="author">${this.artists}</span><br />${this.title}</li>`
        return item;
    }

    get displayBookMenu() {
        let item = `<input type='checkbox' class="book-link" id='book-link-${this.nid}' data-nid='${this.nid}'> <label for='book-link-${this.nid}' >${this.artists} — ${this.title}</label>`
        return item;
    }

    get displayBookContent() {
        
        /* html */
        let item = `<chapter class="section__book-content--article" id="book-article-${this.nid}">
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

                        ${this.bookSafeContents}
                                            
                        <div class="popout__interior--biography">
                            ${this.bio}
                        </div>
                    </chapter>`;
        return item;
    }

    


    get displayFull() {

        console.log(this.audio)


        let title =  this.title+" — "+this.artists;
        $("title").text(title)
        history.pushState('',title, window.location.pathname+'#text-'+this.nid);

        $(".popout").remove();

        /* html */
       let popout = `
        <div class='popout' id='popout__${this.nid}'>
            <div class="popout__menu">
                <!-- <div class="popout__pub" data-nid="${this.nid}"><img class="popout__menu--img" src="img/book.svg"></div>-->
                <div class="popout__close">&times;</div>
            </div>
            
            <div class="popout__interior">
            
                  <div class="popout__interior--grid">    
              <!-- <div class="popout__interior--grid-left"> -->

              <h2><span class="author">${this.artists}</span><br />
              ${this.title}</h2>

              <div class="editorial">
                    <div class="editorial--illustration" style="background-image:url('${this.editorial_illustration}')" />
                    </div>
                    <div class="editorial--content">
                        ${this.editorial}
                        <div class="editorial--author">&mdash;${this.editorial_author}</div>
                    </div>
              </div>
              
        
                
                  ${this.contents}

                  <img src="img/leaf_1.png" class="article__tombstone"/>
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


