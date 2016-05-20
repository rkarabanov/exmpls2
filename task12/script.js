Hamburger.SIZE_SMALL=[50,20,"SIZE_SMALL"];
Hamburger.SIZE_BIG=[100, 40,"SIZE_BIG"];

Hamburger.STUFFING_CHEESE=[10,20,"STUFFING_CHEESE"];
Hamburger.STUFFING_SALAT=[20,5,"STUFFING_SALAT"];
Hamburger.STUFFING_POTATO=[15,10,"STUFFING_POTATO"];

Hamburger.TOPPING_SAUCE=[15, 0,"TOPPING_SAUCE"];
Hamburger.TOPPING_MAYO=[20, 5,"TOPPING_MAYO"];

function Hamburger(size,stuffing) {
	this.tgr=this.tgr|0;
	this.calory=this.calory|0;
	this.toppings=[];
	try{
		if(arguments.length>2){
			throw new SyntaxError("Очень много передаваемых переменных");
		}
		if(size[2].indexOf("SIZE")>-1){
			this.tgr+=size[0];
			this.calory+=size[1];
		}
		else{
			throw new SyntaxError("Ошибка в типе передаваемой переменной");
		}
		if(stuffing[2].indexOf("STUFFING")>-1){
			this.tgr+=stuffing[0];
			this.calory+=stuffing[1];
		}
		else{
			throw new SyntaxError("Ошибка в типе передаваемой переменной");
		}

	} catch(e){
		if (e.name == "SyntaxError") {
			alert( "Извините, в данных ошибка" );
		} else {
			throw e;
		}
	}
}

Hamburger.prototype.calculateCalories = function() {
	return this.calory;
};

Hamburger.prototype.calculatePrice = function() {
	return this.tgr;
};

Hamburger.prototype.addTopping = function(topping) {
	try{
		if(arguments.length>1||this.tgr==0||this.calory==0){
			throw new SyntaxError("Более одного аргумента или не существует гамбургера");
		}

		for (var i = 0; i < this.toppings.length; i++) {
			if(this.toppings[i]===topping[2]){
				throw new SyntaxError("Ошибка в типе передаваемой переменной");
			}
		}
		if (topping[2].indexOf("TOPPING")>-1) {
			this.tgr+=topping[0];
			this.calory+=topping[1];
			this.toppings.push(topping[2]);
		}
		else{
			throw new SyntaxError("Ошибка в типе передаваемой переменной");
		}
	} catch(e){
		if (e.name == "SyntaxError") {
			alert( "Извините, в данных ошибка" );
		} else {
			throw e;
		}
	}

};

// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А сколько теперь стоит? 
console.log("Price with sauce: %f", hamburger.calculatePrice());
