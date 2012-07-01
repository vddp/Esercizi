/**
* apply
* apply the given function to the given value
*/
var apply = function apply (argumentArray){
  return (argumentArray[0] (argumentArray[1]));
}

apply ([Math.cos, Math.PI/3]); //0.5


/*
var aa = function (argumentArray){
  var i;
  var f = argumentArray[0];
  var array = argumentArray[1];
  for (i=0; i<this.array.length; i++) {
    this.array[i] = argumentArray[0](this.array[i]);
  };
}
*/


// aa

var aa = function (fun){
  return function (array){
    return array.map(fun);
  };
}

aa(function (x) {return x * 2;})([1,3,5,7,9]); //[2.6.10.14.18]


// Comp2

var comp2 = function (argumentArray){
  var f = argumentArray[0];
  var g = argumentArray[1];
  return function(x){
    return f(g(x));
  };

}

comp2([
  function (x) {return x * 2;},
  function (y) {return y - 1;}
  ])(5); //8


// Comp

/*
var comp = function (argumentArray){
    var i;
    for (i = (argumentArray.length - 1); i >= 0; i--) {
      var f = argumentArray[i];
        return function(x){
          return f(x);
        };
    };
}
*/

var compReduce = function (arr){
  return function (x) {
    return arr.reduce(function (f, g) {
      return function (x) {
        return f(g(x));
      };
    });
  };
}

var compReduce2 = function (arr){
  return function (x) {
    return arr.reduce(comp2)
  };
}

comp ([
  function (x) {return x + 1;},
  function (y) {return y * 2;},
  function (z) {return z - 1;}
])(5);


//CONS

/*
var cons = function (argumentArray){
  var i;
  var result = new Array(argumentArray.length - 1);
  for (i=0; i<argumentArray.length; i++){
    var f = argumentArray[i];
    var elem = function (x) {
        return f(x);
      };
    result[i] = elem;
  };
  return result;
}
*/

cons([
  function (x) {return x - 1;},
  function (y) {return y * 2;},
  function (z) {return z - 3;},
  ])(5); //[4,10,2]


// Distl

var distl = function (argumentArray){
  this.a= argumentArray[0];
  this.arrayb = argumentArray[1];
  var result = arrayb.map (function(item){
   return [a, item];
  });
  return result;
}

distl(['a',[0,1,2,3,4,5]]);
JSON.stringify(distl(['a',[0,1,2,3,4,5]]))


//TRANS

/*
var trans = function (matrix){
  var result = [];
  matrix.forEach(function(row, i){
    matrix.forEach(function(value, j){
    (result[j] = result[j] || [])[i] = value;
    });
  });
  return result;
}
*/
trans([[0,1,2],[3,4,5],[6,7,8]]);
JSON.stringify(trans([[0,1,2],[3,4,5],[6,7,8]]))

