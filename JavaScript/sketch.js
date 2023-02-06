var points = [];

var mul;

var r1;
var r2;
var g1;
var g2;
var b1;
var b2;

function setup(){

  createCanvas(windowWidth, 1000);

  background(color('#181818'));
  angleMode(DEGREES);
  noiseDetail(1)

  // Can randomize the density value for each refresh. 
  var density = 50;
  var space = width/density;
  for(var x = 0; x < width; x += space){
    for(var y = 0; y < innerHeight; y += space){
      var p = createVector(x + random(-10,10),y + random(-10,10));
      points.push(p);
    }
  }
  
  shuffle(points, true)
   r1 = random(255);
   r2 = random(255);
   g1 = random(255);
   g2 = random(255);
   b1 = random(255);
   b2 = random(255);
  
   mul = random(0.001, 0.01)
}

function draw(){
  
  noStroke();
  var max;
  if(frameCount <= points.length){
     max = frameCount * 2;
  } else {
     max = points.length;
  }
     
  for(var i = 0; i < max; i++){
    var r = map(points[i].x, 0, width, r1, r2);
    var g = map(points[i].y, 0, height, g1, g2);
    var b = map(points[i].x, 0, width, b1, b2);
    
    fill(r,g,b);
    var angle = map(noise(points[i].x * mul, points[i].y * mul), 0, 1, 0, 720);
     points[i].add(createVector(cos(angle),sin(angle)));
  
    
    ellipse(points[i].x, points[i].y, 1);
    
  }
}