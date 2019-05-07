var mapimg;
var clat = 0;
var clon = 0;

var ww = 1024;
var hh = 512;
var zoom = 1;

// var lat=10.9617;
// var lon=79.3881;
var x,y;
var earthquakes;

function preload() {
    // The clon and clat in this url are edited to be in the correct order.
    mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    clon + ',' + clat + ',' + zoom + '/' +
    ww + 'x' + hh +
    '?access_token=pk.eyJ1IjoiaGFyaXNoc2FtYmFzaXZhbSIsImEiOiJjanZkZTU5cnkxajZhNGRtbXdzOXlneG8zIn0.cYxPnbSBkb-GlLwCETmOvw');
    earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv');
  //   earthquakes = loadJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
     console.log(earthquakes); 
  //   var lat3 = earthquakes.features[0].geometry.coordinates[0];
  //   console.log(lat3);
}

  

  function yval(lat){
    var lat = radians(lat);
    var a = (256/PI) * pow(2,zoom);
    var b = tan((PI / 4) + (lat / 2));
    var c = PI - log(b);
    return a*c;
   
  }

  function xval(lon){
    var lon = radians(lon);
    var a = (256/PI) * pow(2,zoom);
    var b = lon + PI;
    var c = a * b;
   
    return c;
  }

function setup() {
    createCanvas(1024,512);
    translate(width/2,height/2);
    imageMode(CENTER);
    image(mapimg,0,0);
    fill(255,0,255,200);


    cx = xval(clon);
    cy = yval(clat);

    for(var i=1 ; i<= earthquakes.length - 1; i++){
      
      var data = earthquakes[i].split(/,/);
     
      
     
      
      
      var lat = data[1];
      var lon = data[2];
    

      
        
      x = xval(lon) - cx;
      y = yval(lat) - cy;
      console.log(x,y);
  
  
      ellipse(x,y,5,5);
    }
   
  
}




