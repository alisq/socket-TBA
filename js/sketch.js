

/*


Build out of RANDOM GROWTH by Jeff Thompson | 2019/20 | jeffreythompson.org
*/




let maxAge = 600;          // tendrils older than this will
                           // be removed – try changing!



let fungi;                 // list of objects



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // draw the background in setup(), since after
  // that every frame draws on top of the previous
  //background(0);
  //textFont(font)
	
  // create a bunch of Fungus objects growing
  // from the center
  fungi = [];

  let points = [];



  setTimeout(function(){
    $(".article-list").each(function(){
        points.push({x:$(this).position().left,y:$(this).position().top})
    })


  
  //console.log(points)
  
	for(i=0; i<points.length;i++) {
		// var vehicle = new Vehicle(points[i].x,points[i].y )
		// vehicles.push(vehicle)
    
    let f = new Fungus(points[i].x,points[i].y )
    
    fungi.push(f);

    
	}

  },2000)


  
}


function draw() {
  
  
    for (let i=fungi.length-1; i>=0; i-=1) {
      
      // get the current object
      let f = fungi[i];
      
      // update and, if it has reached a
      // certain radius or is too old, remove it
      f.update();
      if (f.distFromCenter >= f.maxDistance || f.age > maxAge) {
        fungi.splice(i, 1);
      }
      
      // draw it onscreen
      f.display();
    }
    
    // if the simulation starts to bog down,
    // start over automatically
    if (frameRate < 30) {
      setup();
    }
  
}

