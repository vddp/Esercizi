function Point (x, y){
	this.x = x;
	this.y = y;

	this.getDistance= function (point2){
		return (Math.sqrt(Math.pow(this.x-point2.x,2) + Math.pow(this.y-point2.y,2)));
	};
}

function Triangle (a, b, c){
	this.a = a;
	this.b = b;
	this.c = c;
	
	this.getPerimeter= function(){
		return (a.getDistance(b) + b.getDistance(c) + c.getDistance(a));
	};
	
	this.getArea= function () {
		var l1 = a.getDistance(b);
		var l2 = b.getDistance(c);
		var l3 = c.getDistance(a);
		var area = (Math.sqrt((l1+l2+l3)*((-l1)+l2+l3)*(l1-l2+l3)*(l1+l2-l3))/4);
		return area;
	};
}

var x1=1;
var y1=1;
var x2=3;
var y2=1;
var x3=2;
var y3=3;

p1 = new Point(x1, y1);
p2 = new Point(x2, y2);
p3 = new Point(x3, y3);

d = p1.getDistance(p2);

t = new Triangle(p1, p2, p3);

p = t.getPerimeter();
a = t.getArea();