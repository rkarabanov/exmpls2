
console.log(amountTocoins (217,[25, 10, 5, 2, 1]));
console.log(amountTocoins (137,[50,25, 10, 5, 2, 1]));


function sort(array) {
	return array.sort(function(a,b){return b-a});
}
function amountTocoins (num,array) {
	array=sort(array);
var arrayCoins=[];
for (var i = 0; i < array.length; i++) {
	if(array[i]<=num){
		num-=array[i];
		arrayCoins.push(array[i]);
		i--;
	}
	
}
return arrayCoins;
}

