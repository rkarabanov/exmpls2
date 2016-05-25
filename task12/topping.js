Hamburger.TOPPING_SAUCE=[15, 0,"TOPPING_SAUCE"];
Hamburger.TOPPING_MAYO=[20, 5,"TOPPING_MAYO"];

Hamburger.prototype.addToppingOfHamburger= function (topping) {
    this.addSomethingOfHamburger(topping);
    this.toppings.push(topping[2]);
}

Hamburger.prototype.addTopping = function(topping) {
 this.searchError(this.checkForErrorsTopping(topping));
    this.addToppingOfHamburger(topping);
};