var Point = function (x, y) {
  this.x = x || 0; 
  this.y = y || 0;
}

Point.prototype.getX = function() {
  return this.x;
};

Point.prototype.getY = function() {
  return this.y;
};

Point.prototype.getDistance = function(point) {
  return (Math.sqrt(Math.pow(this.x-point.x,2) + Math.pow(this.y-point.y,2)));
};

Point.prototype.translate = function(dx, dy) {
  this.x = this.x + dx;
  this.y = this.y + dx;

  return translatedPoint = this;
};


var Triangle = function(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;

  this.l1 = a.getDistance(b);
  this.l2 = b.getDistance(c);
  this.l3 = c.getDistance(a);
}

Triangle.prototype.getPerimeter = function() {
  return (this.l1 + this.l2 + this.l3);
};

Triangle.prototype.getArea = function() {
  var p = (this.getPerimeter()/2);
  var area = Math.sqrt((p*(p-this.l1)*(p-this.l2)*(p-this.l3)));
  return area;
};


// Esercizi del 2012-03-09

//funzione che ritorna un punto con coordinate comprese in (-100,100)
function randomPoint () {
  var x= (Math.random() * 200) - 100;
  var y= (Math.random() * 200) - 100;

  return point = new Point(x,y);
}

//Generare n punti random e memorizzarli in un array
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
    var x = item.getX();
    var y = item.getY();
    if (x>=0 && x<=y) result.push(item);
    else if (x<=0 && y>=0) result.push(item);
    else if (x<=0 && y<=x) result.push(item);
  };

  return result;
}

var arraypunti = randomPoints(100);
var risultatoSemipiano = filterPoints(arraypunti);
