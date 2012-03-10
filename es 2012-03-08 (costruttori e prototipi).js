//Costruttori e prototipi

function Persona (name) {
  this.name = name;
  this.getName = function (){
    return "I'm " + this.name;
  };
}

var p1 = new Persona ("Gianni");
var p2 = new Persona ("Dario");



function Circle (r) {
  this.r = r;
}

//Proprietà del prototipo
Circle.prototype.color = "green";

var c = new Circle (3);

//Mostra le proprietà dell'istanza c
for (var p in c) {
  console.log(p);
};