var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + "changes name to " + newname);
    name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + "was fixed");
};

var robot1 = new Robot("robocop");
var robot2 = new Robot("robotic");
var robot3 = new Robot("roblox");

robot1.fixIt();
robot1.sayHi("Kacper");
robot1.changeName("Paka");
robot1.sayHi("Kacper");