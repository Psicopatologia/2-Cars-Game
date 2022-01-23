const leftCar = document.getElementsByClassName("car")[0];
const rightCar = document.getElementsByClassName("car")[1];
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");

class Car {
    constructor(key, car) {
        this.key = key;
        this.car = car;
    }
    changeKey(k) {
        this.key=k;
    }
    move() {
        (this.car.className == "car")
            ? this.car.classList = "car move-right"
            : this.car.classList = "car";
    }
}

const carLeft = new Car('a',leftCar);
const carRight = new Car('j',rightCar);

const changeKey = (keyToChange) => {
    let finish = false;
    let newKey;
    while (!finish) {
        newKey = prompt('Type new key').charAt(0);
        finish = confirm(`Set "${newKey}" as new key?`);
    }
    (keyToChange == 'l') 
        ? carLeft.changeKey(newKey)
        : carRight.changeKey(newKey);
}

leftButton.onclick = () => changeKey('l');
rightButton.onclick = () => changeKey('r');