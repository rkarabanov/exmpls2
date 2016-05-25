Hamburger.prototype.error= function (str) {
    throw new Error(str);
}

Hamburger.prototype.validate=function (fn)
{
    try{
        this.fn;
    } catch(e){
        if (e.name == "Error") {
            alert( "Извините, в данных ошибка" );
        } else {
            throw e;
        }
    }
};


Hamburger.prototype.checkForErrorsTopping=function (topping) {
    if(arguments.length>1||this.tgr==0||this.calory==0){
        this.error("Более одного аргумента или не существует гамбургера");
    }
    for (var i = 0; i < this.toppings.length; i++) {
        if(this.toppings[i]===topping[2]){
            this.error("Ошибка в типе передаваемой переменной");
        }
    }
    if (topping[2].indexOf("TOPPING")===-1) {
        this.error("Ошибка в типе передаваемой переменной");
    }
};

Hamburger.prototype.checkForErrorsHamburger= function (size,stuffing) {
    if(arguments.length>2){
        this.error("Очень много передаваемых переменных");
    }
    if(size[2].indexOf("SIZE")==-1){
        this.error("Ошибка в типе передаваемой переменной");
    }
    if(stuffing[2].indexOf("STUFFING")==-1){
     this.error("Ошибка в типе передаваемой переменной");
    }
};
