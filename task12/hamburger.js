Hamburger.SIZE_SMALL=[50,20,"SIZE_SMALL"];
Hamburger.SIZE_BIG=[100, 40,"SIZE_BIG"];

Hamburger.STUFFING_CHEESE=[10,20,"STUFFING_CHEESE"];
Hamburger.STUFFING_SALAT=[20,5,"STUFFING_SALAT"];
Hamburger.STUFFING_POTATO=[15,10,"STUFFING_POTATO"];

function Hamburger(size,stuffing) {
    this.startPrice();
    this.startCalory();
    this.toppings=[];
    try{
        this.fillHamburger(size,stuffing);
    } catch(e){
        if (e.name == "Error") {
            alert( "Извините, в данных ошибка" );
        } else {
            throw e;
        }
    }
}

Hamburger.prototype.addSizeOfHamburger= function (size) {
    this.tgr+=size[0];
    this.calory+=size[1];
}

Hamburger.prototype.addStuffingOfHamburger= function (stuffing) {
    this.tgr+=stuffing[0];
    this.calory+=stuffing[1];
}

Hamburger.prototype.startCalory = function() {
    this.calory=this.calory||0;
};

Hamburger.prototype.startPrice = function() {
    this.tgr=this.tgr||0;
};

Hamburger.prototype.getCalories = function() {
    return this.calory;
};

Hamburger.prototype.getPrice = function() {
    return this.tgr;
};