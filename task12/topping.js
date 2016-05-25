Hamburger.TOPPING_SAUCE = [15, 0, "TOPPING_SAUCE"];
Hamburger.TOPPING_MAYO = [20, 5, "TOPPING_MAYO"];

Hamburger.VALIDATE_TOPPING='VALIDATE_TOPPING';

Hamburger.prototype.addToppingOfHamburger = function (topping) {
    this.addSomethingOfHamburger(topping);
    this.toppings.push(topping[2]);
}

Hamburger.prototype.addTopping = function (topping) {
    this.validate(Hamburger.VALIDATE_TOPPING,topping);
    this.addToppingOfHamburger(topping);
};