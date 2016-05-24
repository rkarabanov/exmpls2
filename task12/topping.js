Hamburger.TOPPING_SAUCE=[15, 0,"TOPPING_SAUCE"];
Hamburger.TOPPING_MAYO=[20, 5,"TOPPING_MAYO"];

Hamburger.prototype.fillHamburger= function (size,stuffing) {
    if(arguments.length>2){
        this.error("Очень много передаваемых переменных");
    }
    if(size[2].indexOf("SIZE")>-1){
        this.addSizeOfHamburger(size);
    }
    else{
        this.error("Ошибка в типе передаваемой переменной");
    }
    if(stuffing[2].indexOf("STUFFING")>-1){
        this.addStuffingOfHamburger(stuffing);
    }
    else{
        this.error("Ошибка в типе передаваемой переменной");
    }
}



Hamburger.prototype.fillTopping=function (topping) {
    if(arguments.length>1||this.tgr==0||this.calory==0){
        this.error("Более одного аргумента или не существует гамбургера");
    }

    for (var i = 0; i < this.toppings.length; i++) {
        if(this.toppings[i]===topping[2]){
            this.error("Ошибка в типе передаваемой переменной");
        }
    }
    if (topping[2].indexOf("TOPPING")>-1) {
        this.addToppingOfHamburger(topping);
    }
    else{
        this.error("Ошибка в типе передаваемой переменной");
    }
}

Hamburger.prototype.addToppingOfHamburger= function (topping) {
    this.tgr+=topping[0];
    this.calory+=topping[1];
    this.toppings.push(topping[2]);
}

Hamburger.prototype.addTopping = function(topping) {
    try{
        this.fillTopping(topping);
    } catch(e){
        if (e.name == "Error") {
            alert( "Извините, в данных ошибка" );
        } else {
            throw e;
        }
    }

};