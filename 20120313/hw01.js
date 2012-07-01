var Point = function (x, y) {
	this.x = x || 0; 
	this.y = y || 0;
//assegno 0 in caso di undefined
}

Point.prototype.getDistance = function (point) {
  return (Math.sqrt(Math.pow(this.x-point.x,2) + Math.pow(this.y-point.y,2)));
};


var Triangle = function (a, b, c) {
	this.a = a;
	this.b = b;
	this.c = c;

  this.l1 = a.getDistance(b);
  this.l2 = b.getDistance(c);
  this.l3 = c.getDistance(a);

}

Triangle.prototype.getPerimeter = function() {
  return (this.l1+this.l2+this.l3);
};

Triangle.prototype.getArea = function() {
  var p = (this.getPerimeter()/2);
  var area = Math.sqrt((p*(p-this.l1)*(p-this.l2)*(p-this.l3)));
  return area;
};



var x1 = 0, y1 = 0;
var x2 = 10, y2 = 0;
var x3 = 0, y3 = 10;

p1 = new Point(x1, y1);
p2 = new Point(x2, y2);
p3 = new Point(x3, y3);

d = p1.getDistance(p2);

t = new Triangle(p1, p2, p3);

p = t.getPerimeter();
a = t.getArea();