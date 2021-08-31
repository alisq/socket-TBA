class Article {
    constructor(content) {
        this.nid = content.nid;
        this.identity = content.identity;
        this.contents = content.field_article_contents.replaceAll("/sites/default/files","https://tba.codepanel.in/sites/default/files");;
        this.editorial = content.field_editorial;
        this.artists = content.field_artist_s_;
        this.title = content.title;
        this.bio = content.body;
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
        let item = `<div class="section__book-content--article" id="book-article-${this.nid}">${this.artists} — ${this.title}<br /><br />${this.bio}<br /><br />${this.contents}</div>`;
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
                <div class="popout__pub" data-nid="${this.nid}">M</div>
                <div class="popout__close">&times;</div>
            </div>
            
            <div class="popout__interior">
            
                  <div class="popout__interior--grid">    
              <div class="popout__interior--grid-left">
              <div class="editorial">${this.editorial}</div>
              <h2>${this.artists}<br />
                  ${this.title}</h2>
        
                  <br /><br />
                  ${this.contents}
                </div>
                <div class="popout__interior--grid-right">
                ${this.bio}
              </div>
              </div>
            </div>
        </div>
        `

        return popout;
    }

    
}


