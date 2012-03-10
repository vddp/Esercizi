var numbers = [1,2,3,4,5,4,3,2,1];

var filtrati = numbers.filter(function(item, index, array){
 return ((item%2)===0);
});

var mapResult = filtrati.map(function(item, index, array){
   return item * 3;
});

mapResult;


//Altra implementazione

var numeri = [1,2,3,4,5,4,3,2,1];

var PariX3 = function (array){
	return array
 	.filter(function(item){
 		return item % 2 === 0
 	})
 	.map(function(item){
 		return item * 3
 	});
};

PariX3(numeri);