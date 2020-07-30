// Rover object goes here:
let rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
};

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

moveRover('rffrf5flfrffbbb');
console.log(rover);