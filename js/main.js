const leftCar = document.getElementsByClassName("car")[0];
const rightCar = document.getElementsByClassName("car")[1];
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const leftRoad = document.getElementsByClassName("road")[0];
const rightRoad = document.getElementsByClassName("road")[1];

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
        newKey = prompt('Type new key').toLowerCase().charAt(0);
        console.log(newKey)
        finish = confirm(`Set "${newKey}" as new key?`);
    }
    if (keyToChange == 'l') {
        carLeft.changeKey(newKey);
        document.getElementById("leftKey").innerHTML = newKey.toUpperCase();
    } else {
        carRight.changeKey(newKey);
        document.getElementById("rightKey").innerHTML = newKey.toUpperCase();
    }
}

leftButton.onclick = () => changeKey('l');
rightButton.onclick = () => changeKey('r');

document.addEventListener('keydown', (k) => {
    k=k.key.toString().toLowerCase();
    if (k==carLeft.key)
        carLeft.move();
    if (k==carRight.key)
        carRight.move();
})

leftRoad.onclick = () => carLeft.move();
rightRoad.onclick = () => carRight.move();