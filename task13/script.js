function Electricity() {
    this.dayPowerHouse=0;
    this.nightPowerHouse=0;
}

Electricity.prototype.elecrtostation=function () {
    this.prototype=Electricity;
    this.dayPowerHouse=this.dayPowerHouse|0;
    this.nightPowerHouse=this.nightPowerHouse|0;
    let arrPower=[1000,100000];
    this.power=randEnergy(arrPower);
    this.dayPowerHouse+=Math.floor(this.power/3*2);
    this.nightPowerHouse+=Math.floor(this.power/3);
}

Electricity.prototype.houseElectricity=function() {
    this.dayPowerHouse=this.dayPowerHouse|0;
    this.nightPowerHouse=this.nightPowerHouse|0;
    let arrHouse=[1,400];
    this.prototype=Electricity;
    this.houses=randEnergy(arrHouse);
    this.dayPowerHouse-=4*this.houses;
    this.nightPowerHouse-=1*this.houses;
}

Electricity.prototype.powerStation=function PowerStation() {
    this.dayPowerHouse=this.dayPowerHouse|0;
    this.nightPowerHouse=this.nightPowerHouse|0;
    let arrSunPower=[1000,5000];
    this.prototype=Electricity;
    this.sunEnergy=randEnergy(arrSunPower);
    this.dayPowerHouse+=this.sunEnergy;
}

Electricity.prototype.getDayEnergy =function () {
    return    this.dayPowerHouse|0;
}

Electricity.prototype.getNightEnergy=function(){
    return  this.nightPowerHouse|0;
}

Electricity.prototype.getResultEnergy=function(){
    return  this.getDayEnergy()+this.getNightEnergy();
}

function randEnergy(arr) {
    return Math.floor(Math.random()*arr[1]+arr[0]);
}

(function () {
    var electricity=new Electricity();
    electricity.elecrtostation();
    electricity.powerStation();
    for (var i=0;i<70;i++){
        electricity.houseElectricity();}
    console.log('Расход за день '+electricity.getDayEnergy());
    console.log('Расход за ночь '+electricity.getNightEnergy());
    console.log('Результат:'+(electricity.getResultEnergy()>0)?(electricity.getResultEnergy()+' прибыли киловат'):(Math.abs(electricity.getResultEnergy())+' недостаток киловат'));
})();
