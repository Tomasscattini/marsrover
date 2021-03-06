document.addEventListener('DOMContentLoaded', function() {

    // Signs

    let sign = false;

    // Grid color

    let square = document.getElementsByClassName('square');

    function gridColor() {
        for (let i = 0; i < square.length; i++) {
            if (i % 2 === 0 && i < 10 || i % 2 === 0 && i > 19 && i < 30 || i % 2 === 0 && i > 39 && i < 50 || i % 2 === 0 && i > 59 && i < 70 || i % 2 === 0 && i > 79 && i < 90 || i % 2 !== 0 && i > 10 && i < 20 || i % 2 !== 0 && i > 30 && i < 40 || i % 2 !== 0 && i > 50 && i < 60 || i % 2 !== 0 && i > 70 && i < 80 || i % 2 !== 0 && i > 90 && i < 100) {
                square[i].style.backgroundColor = '#ae7b66';
            } else {
                square[i].style.backgroundColor = '#8d5b50';
            }
        }

    };


    // Rover object goes here:

    let rover = {
        direction: "N",
        x: 0,
        y: 0,
        travelLog: []
    };

    // Rover Img

    function moveRoverImg() {
        const roverImg = document.getElementById("rover");
        roverImg.remove();

        for (let i = 0; i < square.length; i++) {
            let x = rover.x;
            let y = rover.y;

            if (square[i].id === x.toString() + y.toString()) {
                const node = document.createElement("img");
                node.src = "img/rover.jpg";
                node.alt = "Rover";
                node.id = "rover";
                square[i].appendChild(node);
            };
        };
    };

    // Direction pointer

    function pointer() {
        let i = rover.x.toString() + rover.y.toString();
        let next = "";
        const roverImg = document.getElementById("rover");

        switch (rover.direction) {
            case ("N"):
                next = (rover.x - 1).toString() + rover.y.toString();
                roverImg.style.transform = "rotate(-90deg)";
                break;
            case ("E"):
                next = rover.x.toString() + (rover.y + 1).toString();
                roverImg.style.transform = "rotate(0deg)";
                break;
            case ("S"):
                next = (rover.x + 1).toString() + rover.y.toString();
                roverImg.style.transform = "rotate(90deg)";
                break;
            case ("O"):
                next = rover.x.toString() + (rover.y - 1).toString();
                roverImg.style.transform = "rotateY(180deg) rotate(0deg)";
                break;
        };

        if (next >= 00 && next <= 99) {
            square[next].style.backgroundColor = "green";
        } else {
            square[i].style.backgroundColor = "orange";
        }

    };

    // Trail

    function paintTrail() {
        for (let i = 0; i < rover.travelLog.length; i++) {
            let j = Number(rover.travelLog[i]);

            square[j].style.backgroundColor = "#573730";

        }
    }

    // Board/Mars

    let crater = [01, 08, 15, 25, 30, 33, 47, 62, 67, 68, 69, 78, 85, 97];
    let flag = [99];

    function createCrater() {
        for (let i = 0; i < crater.length; i++) {
            let j = crater[i];
            const node = document.createElement("img");
            node.src = "img/crater.jpg";
            node.alt = "Crater";
            node.className = "crater";
            square[j].appendChild(node);
        };
    };

    function createFlag() {
        if (flag.length > 0) {
            let f = flag[0];
            const node = document.createElement("img");
            node.src = "img/flag.svg";
            node.alt = "Flag";
            node.id = "flag";
            square[f].appendChild(node);
        } else {
            return;
        }
    }

    // Check craters

    let crashed = false;

    function checkFront() {
        for (let i = 0; i < crater.length; i++) {
            switch (rover.direction) {
                case 'N':
                    if (Number((rover.x - 1).toString() + rover.y.toString()) === crater[i]) {
                        crashed = true;
                        break;
                    } else {
                        continue;
                    }
                    break;

                case 'E':
                    if (Number(rover.x.toString() + (rover.y + 1).toString()) === crater[i]) {
                        crashed = true;
                        break;
                    } else {
                        continue;
                    }
                    break;

                case 'S':
                    if (Number((rover.x + 1).toString() + rover.y.toString()) === crater[i]) {
                        crashed = true;
                        break;
                    } else {
                        continue;
                    }
                    break;

                case 'O':
                    if (Number(rover.x.toString() + (rover.y - 1).toString()) === crater[i]) {
                        crashed = true;
                        break;
                    } else {
                        continue;
                    }
                    break;
            }
        };
    };

    function checkBack() {
        for (let i = 0; i < crater.length; i++) {
            switch (rover.direction) {
                case 'N':
                    if (Number((rover.x + 1).toString() + rover.y.toString()) === crater[i]) {
                        crashed = true;
                        break;
                    } else {
                        continue;
                    }
                    break;

                case 'E':
                    if (Number(rover.x.toString() + (rover.y - 1).toString()) === crater[i]) {
                        crashed = true;
                        break;
                    } else {
                        continue;
                    }
                    break;

                case 'S':
                    if (Number((rover.x - 1).toString() + rover.y.toString()) === crater[i]) {
                        crashed = true;
                        break;
                    } else {
                        continue;
                    }
                    break;

                case 'O':
                    if (Number(rover.x.toString() + (rover.y + 1).toString()) === crater[i]) {
                        crashed = true;
                        break;
                    } else {
                        continue;
                    }
                    break;
            }
        };
    };

    // ======================

    // Movement functions

    // Turns

    function turnLeft(rover) {
        switch (rover.direction) {
            case 'N':
                rover.direction = "O";
                break;
            case 'O':
                rover.direction = "S";
                break;
            case 'S':
                rover.direction = "E";
                break;
            case 'E':
                rover.direction = "N";
                break;
        }

        rover.travelLog.push(rover.x.toString() + rover.y.toString());
    }


    function turnRight(rover) {
        switch (rover.direction) {
            case 'N':
                rover.direction = "E";
                break;
            case 'E':
                rover.direction = "S";
                break;
            case 'S':
                rover.direction = "O";
                break;
            case 'O':
                rover.direction = "N";
                break;
        }

        rover.travelLog.push(rover.x.toString() + rover.y.toString());
    }

    // Backward and forward

    function moveForward(rover) {
        checkFront();
        if (crashed == true) {
            document.getElementById("crashed").innerHTML = "You've crashed into a crater!";
            document.getElementById("crashed").style.display = "block";
            document.getElementById("button-container").style.display = "flex";
            sign = true;
        } else {
            switch (rover.direction) {
                case 'N':
                    if (rover.x <= 0) {
                        document.getElementById("error").style.display = "block";
                        document.getElementById("button-container").style.display = "flex";
                        sign = true;
                    } else {
                        rover.x -= 1;
                    }
                    break;

                case 'E':
                    if (rover.y >= 9) {
                        document.getElementById("error").style.display = "block";
                        document.getElementById("button-container").style.display = "flex";
                        sign = true;
                    } else {
                        rover.y += 1;
                    }
                    break;

                case 'S':
                    if (rover.x >= 9) {
                        document.getElementById("error").style.display = "block";
                        document.getElementById("button-container").style.display = "flex";
                        sign = true;
                    } else {
                        rover.x += 1;
                    }
                    break;

                case 'O':
                    if (rover.y <= 0) {
                        document.getElementById("error").style.display = "block";
                        document.getElementById("button-container").style.display = "flex";
                        sign = true;
                    } else {
                        rover.y -= 1;
                    }
                    break;

            }

            rover.travelLog.push(rover.x.toString() + rover.y.toString());
        }

    }

    function moveBackward(rover) {
        checkBack();
        if (crashed == true) {
            document.getElementById("crashed").innerHTML = "You've crashed into a crater!";
            document.getElementById("crashed").style.display = "block";
            document.getElementById("button-container").style.display = "flex";
            sign = true;
        } else {
            switch (rover.direction) {
                case 'N':
                    if (rover.x >= 9) {
                        document.getElementById("error").style.display = "block";
                        document.getElementById("button-container").style.display = "flex";
                        sign = true;
                    } else {
                        rover.x += 1;
                    }
                    break;

                case 'E':
                    if (rover.y <= 0) {
                        document.getElementById("error").style.display = "block";
                        document.getElementById("button-container").style.display = "flex";
                        sign = true;
                    } else {
                        rover.y -= 1;
                    }
                    break;

                case 'S':
                    if (rover.x <= 0) {
                        document.getElementById("error").style.display = "block";
                        document.getElementById("button-container").style.display = "flex";
                        sign = true;
                    } else {
                        rover.x -= 1;
                    }
                    break;

                case 'O':
                    if (rover.y >= 9) {
                        document.getElementById("error").style.display = "block";
                        document.getElementById("button-container").style.display = "flex";
                        sign = true;
                    } else {
                        rover.y += 1;
                    }
                    break;

            }

            rover.travelLog.push(rover.x.toString() + rover.y.toString());
        }

    }

    function moveRover(parameter) {
        for (let i = 0; i < parameter.length; i++) {
            if (parameter[i] === 'f') {
                moveForward(rover);
            } else if (parameter[i] === 'b') {
                moveBackward(rover);
            } else if (parameter[i] === 'r') {
                turnRight(rover);
            } else if (parameter[i] === 'l') {
                turnLeft(rover);
            }
        }
    };

    // Result signs

    let clicks = 0;

    function result() {
        let x = rover.x;
        let y = rover.y;

        if (x.toString() + y.toString() === "99") {
            document.getElementById("win").innerHTML = "You've reached your destination. Congratulations!";
            document.getElementById("win").style.display = "block";
            document.getElementById("button-container2").style.display = "flex";
            flag.pop(99);
            createFlag();
            sign = true;
        } else if (clicks >= 3) {
            document.getElementById("lost").innerHTML = "You lost the conection with the rover and with it millons of dollars. You are fired!";
            document.getElementById("lost").style.display = "block";
            document.getElementById("button-container").style.display = "flex";
            sign = true;
        }
    }

    // Buttons

    document.getElementById("keep-trying").addEventListener("click", function() {
        document.getElementById("error").style.display = "none";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error3").style.display = "none";
        document.getElementById("crashed").style.display = "none";
        document.getElementById("lost").style.display = "none";
        document.getElementById("button-container").style.display = "none";
        crashed = false;
        sign = false;
    });

    document.getElementById("start-again").addEventListener("click", playAgain);
    document.getElementById("play-again").addEventListener("click", playAgain);

    function playAgain() {
        document.getElementById("error").style.display = "none";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error3").style.display = "none";
        document.getElementById("crashed").style.display = "none";
        document.getElementById("lost").style.display = "none";
        document.getElementById("win").style.display = "none";
        document.getElementById("button-container2").style.display = "none";
        document.getElementById("button-container").style.display = "none";
        rover.x = 0;
        rover.y = 0;
        rover.direction = "N";
        crashed = false;
        sign = false;
        moveRoverImg();
        gridColor();
        rover.travelLog = [];
        clicks = 0;

        if (flag.length = 0) {
            flag.push(99);
            createFlag();
        }
    }

    document.getElementById("next-level").addEventListener("click", function() {
        document.getElementById("error").style.display = "none";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error3").style.display = "none";
        document.getElementById("crashed").style.display = "none";
        document.getElementById("lost").style.display = "none";
        document.getElementById("win").style.display = "none";
        document.getElementById("button-container2").style.display = "none";
        document.getElementById("button-container").style.display = "none";
        rover.x = 0;
        rover.y = 0;
        rover.direction = "N";
        crashed = false;
        sign = false;
        moveRoverImg();
        gridColor();
        rover.travelLog = [];
        clicks = 0;

    });

    // Input field

    let input = [];

    document.getElementById("button").addEventListener("click", function() {

        let answer = document.getElementById("answer").value;

        if (answer.length > 9) {
            document.getElementById("error3").innerHTML = "You can only write up to 9 characters! Try again";
            document.getElementById("error3").style.display = "block";
            document.getElementById("button-container").style.display = "flex";
            answer = "";
        } else if (answer.toLowerCase().includes("f") == false && answer.toLowerCase().includes("b") == false && answer.toLowerCase().includes("l") == false && answer.toLowerCase().includes("r") == false) {
            document.getElementById("error2").innerHTML = "You can only use the commands 'f', 'b', 'r' or 'l'! Try again";
            document.getElementById("error2").style.display = "block";
            document.getElementById("button-container").style.display = "flex";
        } else if (sign == true) {
            console.log("Press any button to continue");
        } else {

            input.unshift(answer.toLowerCase());
            gridColor();
            moveRover(input[0]);
            moveRoverImg();
            paintTrail();
            pointer();
            clicks++;
            result();
            answer = "";

        };

    });

    gridColor();
    createCrater();
    createFlag();
    moveRoverImg();

}, false);