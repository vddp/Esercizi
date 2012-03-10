//Filtrare i valori positivi in un array e restituirne la somma

var array = [1,-2,3,-4,5,-6,7,-8,9];

var filterSum = function(array){
  return array
    
  .filter (function (item) {
    return item >= 0;
  })

  .reduce (function (prev,cur) {
    return prev + cur;
  });
};

filterSum(array);