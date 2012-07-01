var numbers = [1,2,3,4,5,6,7,8,9];

var iterator = function (item) {
  return ((item % 2) === 0);
};

var filterIterator = function (array, iterator) {
  var risultato = [];
  var i;
  var item;
  
  for (i=0; i<array.length; i=i+1){
    item = array[i];
      if (iterator(item)) {
      risultato.push(item);
      }
  };
  
  return risultato;
};