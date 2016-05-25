(function () {
// маленький гамбургер с начинкой из сыра
    var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// добавка из майонеза
    hamburger.addTopping(Hamburger.TOPPING_MAYO);
// спросим сколько там калорий
    console.log("Calories: %f", hamburger.getCalories());
// сколько стоит
    console.log("Price: %f", hamburger.getPrice());
// я тут передумал и решил добавить еще приправу
    hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// А сколько теперь стоит? 
    console.log("Price with sauce: %f", hamburger.getPrice());
})();