Hamburger.SIZE_SMALL = [50, 20, "SIZE_SMALL"];
Hamburger.SIZE_BIG = [100, 40, "SIZE_BIG"];

Hamburger.STUFFING_CHEESE = [10, 20, "STUFFING_CHEESE"];
Hamburger.STUFFING_SALAT = [20, 5, "STUFFING_SALAT"];
Hamburger.STUFFING_POTATO = [15, 10, "STUFFING_POTATO"];

Hamburger.VALIDATE_HAMBURGER='VALIDATE_HAMBURGER';

function Hamburger(size, stuffing) {
    this.startPrice();
    this.startCalory();
    this.toppings = [];
    this.validate(Hamburger.VALIDATE_HAMBURGER, size, stuffing);
    this.addSomethingOfHamburger(size);
    this.addSomethingOfHamburger(stuffing);
};


Hamburger.prototype.addSomethingOfHamburger = function (arr) {
    this.tgr += arr[0];
    this.calory += arr[1];
};


Hamburger.prototype.startCalory = function () {
    this.calory = this.calory || 0;
};

Hamburger.prototype.startPrice = function () {
    this.tgr = this.tgr || 0;
};

Hamburger.prototype.getCalories = function () {
    return this.calory;
};

Hamburger.prototype.getPrice = function () {
    return this.tgr;
};

