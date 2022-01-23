const leftCar = document.getElementsByClassName("car")[0];
const rightCar = document.getElementsByClassName("car")[1];
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const leftRoad = document.getElementsByClassName("road")[0];
const rightRoad = document.getElementsByClassName("road")[1];
const leftObstacle = document.getElementsByClassName("obstacle")[0];
const rightObstacle = document.getElementsByClassName("obstacle")[1];

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

const stopGame = () => {
    leftObstacle.style.display = "none";
    rightObstacle.style.display = "none";
    //window.location.reload();
}

leftObstacle.style.animation = "down 2s infinite";
rightObstacle.style.animation = "down 2s infinite";

let changePositionObstacle = setInterval(() => {
    let changeLeft = Math.random() < 0.7;
    let changeRight = Math.random() < 0.7;
    if (changeLeft) {
        (leftObstacle.className == "obstacle")
            ? leftObstacle.classList = "obstacle obstacle-right"
            : leftObstacle.classList = "obstacle";
    }
    if (changeRight) {
        (rightObstacle.className == "obstacle")
            ? rightObstacle.classList = "obstacle obstacle-right"
            : rightObstacle.classList = "obstacle";
    }
}, 2000);

let checkObstacle = setInterval(()=>{
    if ((leftObstacle.className == "obstacle" && carLeft.car.className == "car")
        || (leftObstacle.className == "obstacle obstacle-right" && carLeft.car.className == "car move-right")) {
        let topObstacle = parseInt(window.getComputedStyle(leftObstacle).getPropertyValue("top"));
        let topCar = parseInt(window.getComputedStyle(carLeft.car).getPropertyValue("top"));
        let heightCar = parseInt(window.getComputedStyle(carLeft.car).getPropertyValue("height"));
        if (topObstacle > topCar && topObstacle < topCar+heightCar) {
            stopGame()
        }
    }
    if ((rightObstacle.className == "obstacle" && carRight.car.className == "car")
        || (rightObstacle.className == "obstacle obstacle-right" && carRight.car.className == "car move-right")) {
        let topObstacle = parseInt(window.getComputedStyle(rightObstacle).getPropertyValue("top"));
        let topCar = parseInt(window.getComputedStyle(carRight.car).getPropertyValue("top"));
        let heightCar = parseInt(window.getComputedStyle(carRight.car).getPropertyValue("height"));
        if (topObstacle > topCar && topObstacle < topCar+heightCar) {
            stopGame();
        }
    }
},10)