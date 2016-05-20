
function unique(string) {
var stringUnique="";
for (var i = 0; i < string.length; i++) {
	var flag=true;
	for (var j = 0; j < stringUnique.length; j++) {
		if(stringUnique[j]===string[i]){
			flag=false;
		}
	}
	if(flag){stringUnique+=string[i];}
}
return stringUnique;
}
window.alert(unique(window.prompt("Enter a string")));