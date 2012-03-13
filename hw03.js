var Point = function (x, y) {
  this.x = x || 0; 
  this.y = y || 0;
}

Point.prototype.getDistanceFromPoint = function (point) {
  return (Math.sqrt(Math.pow(this.x-point.x,2) + Math.pow(this.y-point.y,2)));
};

Point.prototype.translate = function (dx, dy) {
  this.x = this.x + dx;
  this.y = this.y + dx;

  return translatedPoint = this;
};

Point.prototype.membership = function (funzioneRetta) {
  var result = funzioneRetta (this.x, this.y);
  
  //guardie per il ritorno del valore
  if (result > 0) {
    return +1;
  }
  if (result < 0) {
    return -1;
  }
  return 0;
};


var Triangle = function (p1, p2, p3) {
  this.points = [p1, p2, p3];
}

Triangle.prototype.getLati = function() {
  var i = 0;
  var lati = new Array();
  for (i=1; i<this.points.length; i++){
    lati.push(this.points[i-1].getDistanceFromPoint(this.points[i]));
  };
  lati.push(this.points[0].getDistanceFromPoint(this.points[(this.points.length-1)]));

  return lati;
};

Triangle.prototype.getPerimeter = function() {
  var lati = this.getLati();
  var perimetro = lati.reduce (function(previous, current) {
    return previous + current;
  });
  return perimetro;
};

Triangle.prototype.getArea = function() {
  var lati = this.getLati();
  var p = (this.getPerimeter()/2);
  //modificare implementazione, non ho a disposizione i lati ma un array di lati.
  var area = Math.sqrt((p*(p-lati.pop())*(p-lati.pop())*(p-lati.pop())));
  
  return area;
};

/* TEST
a= new Point(1,1);
b= new Point (2,1);
c = new Point (2,4);
t = new Triangle (a,b,c);
lati = t.getLati();
*/


// Esercizi del 2012-03-09

//funzione che ritorna un punto con coordinate comprese in (-100,100)
function randomPoint () {
  var x= (Math.random() * 200) - 100;
  var y= (Math.random() * 200) - 100;

  return point = new Point(x,y);
}

//Generare n punti random e restituirli in un array
function randomPoints (n) {
  var n = n || 1;
  var result = new Array(n);
  for (var index=0; index<n; index+=1){
    result[index] = randomPoint();
  };

  return result;
}

//filtrare i punti che giacciono nel semipiano positivo definito da y-x=0
function filterPoints (points) {
  var result=[];
  var index;
  var item;
  var x, y;

  for (index=0; index<points.length; index+=1) {
    item = points[index]; //estraggo un punto dall'array
    //verifico in che semipiano si trova il punto
    var x = item.x;
    var y = item.y;
    if (x>=0 && x<=y) result.push(item);
    else if (x<=0 && y>=0) result.push(item);
    else if (x<=0 && y<=x) result.push(item);
  };

  return result;
}

var arraypunti = randomPoints(100);
var risultatoSemipiano = filterPoints(arraypunti);


//Esercizi del 2012-03-12

var Line = function (a, b, c) {
  if(!(this instanceof Line)) {
    return new Line(a, b, c);
  }

  this.a = a;
  this.b = b;
  this.c = c;
}


Point.prototype.getDistanceFromLine = function (line) {
  //distanza con segno, il segno indica l'appartenenza al semipiano
  var dist = ((line.a * this.x) + (line.b * this.y) + line.c)/Math.sqrt(Math.pow(line.a,2) + Math.pow(line.b,2)); 
  
  return dist;
};

//Consente mediante la chiamata all'unico metodo getDistance di avere un diverso comportamento in base al parametro
Point.prototype.getDistance = function (x) {
  
  if (x instanceof Point){
    return this.getDistanceFromPoint(x);
  }

  if (x instanceof Line){
    return this.getDistanceFromLine(x);
  }

  throw new Error ('x is not a Point nor a Line');
};

//Controlla se il triangolo è al di sopra della linea passata come parametro
Tringle.prototype.above = function (line) {
  return this.points.every(function (item) { 
    return (item.getDistance(line) > 0);
  });
};

//Controlla se il triangolo è al di sotto della linea passata come parametro
Tringle.prototype.below = function (line) {
  return this.points.every(function (item) { 
    return (item.getDistance(line) < 0);
  });
};

//Controlla se il triangolo interseca la linea passata come parametro
Tringle.prototype.intersect = function (line) {
  return (!(this.prototype.above(line)) && !(this.prototype.below(line));
};


var Quad = function (p1, p2, p3, p4) {
  if(!(this instanceof Quad)) {
    return new Quad(p1, p2, p3);
  }

  this.points = [p1, p2, p3, p4];
};

Quad.prototype.above = Triangle.prototype.above;
Quad.prototype.below = Triangle.prototype.below;
Quad.prototype.intersect = Triangle.prototype.intersect;
