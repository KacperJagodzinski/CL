String.prototype.upperLower = function () {
    var result = "";
    var counter = 0;

    for (var i = 0; i <this.length ; i++) {
        if(this.charAt(i) === " "){
            result+= " ";
        }else{
            if (counter %2 !== 0){
                result += this[i].toLocaleUpperCase();
            }else{
                result += this[i].toLocaleLowerCase()
            }
            counter++;
        }
    }
    console.log(result);
    return result;
}

var test = "Ala ma kota.";

//test.upperLower();

var Car = function (name, color, km) {
    this.name = name;
    this.color = color;
    this.km = km;
}

var vehicle = new Car("BMW","red",0);



Car.prototype.printCarInfo = function () {
    console.log(this.name);
    console.log(this.color);
    console.log(this.km);
}

Car.prototype.drive = function (km) {
    this.km += km;
}

vehicle.printCarInfo();
vehicle.drive(100);
vehicle.printCarInfo();

vehicle.inspect = ["21.01.2016", "22.01.2017"];

Car.prototype.addDate = function (date) {
    this.inspect.push(date);
}

Car.prototype.showDates = function () {
    console.log(this.inspect.toString());
}

vehicle.printCarInfo();
vehicle.addDate("22.04.2020");
vehicle.showDates();

var Rectangle = function (length,width) {
    this.length=length;
    this.width = width;
}

Rectangle.prototype.getArea = function () {
    return this.length * this.length;
}

Rectangle.prototype.getPerimiter = function () {
    return  2 * this.length + 2 * this.width;
}

var square = new Rectangle(2,2);
console.log(square.getArea());
console.log(square.getPerimiter());