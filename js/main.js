// Grid color

let square = document.getElementsByClassName('square');

for (let i = 0; i < square.length; i++) {
    if (i % 2 === 0 && i < 10 || i % 2 === 0 && i > 19 && i < 30 || i % 2 === 0 && i > 39 && i < 50 || i % 2 === 0 && i > 59 && i < 70 || i % 2 === 0 && i > 79 && i < 90 || i % 2 !== 0 && i > 10 && i < 20 || i % 2 !== 0 && i > 30 && i < 40 || i % 2 !== 0 && i > 50 && i < 60 || i % 2 !== 0 && i > 70 && i < 80 || i % 2 !== 0 && i > 90 && i < 100) {
        square[i].style.backgroundColor = '#ae7b66';
    } else {
        square[i].style.backgroundColor = '#8d5b50';
    }
}


// Rover object goes here:

let rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
};

function moveRoverImg() {
    for (let i = 0; i < square.length; i++) {
        let x = rover.x;
        let y = rover.y;
        if (x.toString() + y.toString() === square[i].id) {
            const node = document.createElement("img");
            node.src = "img/rover.jpg";
            node.alt = "Rover";
            node.id = "rover";
            square[i].appendChild(node);
        } else if (square[i].childNodes.length > 0 && square[i].childNodes.id === "rover") {
            square[i].childNodes.remove();
        };
        console.log(square[i].childNodes);
    };
};

moveRoverImg();


// Board/Mars

let mars = [
    ['', 'C', '', '', '', '', '', '', 'C', ''],
    ['', '', '', '', '', 'C', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['C', '', '', 'C', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', 'C', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', 'C', '', '', '', '', 'C', 'C', 'C'],
    ['', '', '', '', '', '', '', '', 'C', ''],
    ['', '', '', '', '', 'C', '', '', '', ''],
    ['', '', '', '', '', '', '', 'C', '', 'F'],
]

// ======================


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

    rover.travelLog.push('x=' + rover.x + ' y= ' + rover.y);
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

    rover.travelLog.push('x=' + rover.x + ' y= ' + rover.y);
}

function moveForward(rover) {
    switch (rover.direction) {
        case 'N':
            if (rover.x <= 0) {
                console.log("You can't place the rover outside the area")
            } else {
                rover.x -= 1;
            }
            break;

        case 'E':
            if (rover.y >= 9) {
                console.log("You can't place the rover outside the area")
            } else {
                rover.y += 1;
            }
            break;

        case 'S':
            if (rover.x >= 9) {
                console.log("You can't place the rover outside the area")
            } else {
                rover.x += 1;
            }
            break;

        case 'O':
            if (rover.y <= 0) {
                console.log("You can't place the rover outside the area")
            } else {
                rover.y -= 1;
            }
            break;

    }

    rover.travelLog.push('x=' + rover.x + ' y= ' + rover.y);

}

function moveBackward(rover) {
    switch (rover.direction) {
        case 'N':
            if (rover.x >= 9) {
                console.log("You can't place the rover outside the area")
            } else {
                rover.x += 1;
            }
            break;

        case 'E':
            if (rover.y <= 0) {
                console.log("You can't place the rover outside the area")
            } else {
                rover.y -= 1;
            }
            break;

        case 'S':
            if (rover.x <= 0) {
                console.log("You can't place the rover outside the area")
            } else {
                rover.x -= 1;
            }
            break;

        case 'O':
            if (rover.y >= 9) {
                console.log("You can't place the rover outside the area")
            } else {
                rover.y += 1;
            }
            break;

    }

    rover.travelLog.push('x=' + rover.x + ' y= ' + rover.y);

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
        } else {
            continue;
        }
    }
};

if (rover.x === 9 && rover.y === 9) {
    console.log("You've reached your destination. Congratulations!");
} else {
    console.log("The way ahead is long and full of perils. Keep trying your best until you reach the flag!")
}

// Input

let input = [];

document.getElementById("button").addEventListener("click", function() {
    input.unshift(document.getElementById("answer").value);

    moveRover(input[0]);
    moveRoverImg();
    console.log(rover);

    return true;

});