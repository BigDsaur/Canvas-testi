const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// // fillrect()
// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = 'yellow';
// ctx.fillRect(200, 20, 150, 100);

// // strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green'
// ctx.strokeRect(100, 200, 150, 100);

// // clearrect()
// ctx.clearRect(25, 25, 80, 50)

// // fillText()
// ctx.font = '30px Arial'
// ctx.fillStyle = 'blue'
// ctx.fillText('Hello World', 400, 50)

// //strokeText()
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'black'
// ctx.strokeText('Hello World', 400, 100)

// Paths

// ctx.beginPath()
// ctx.moveTo(50, 50)
// ctx.lineTo(150, 50)
// ctx.lineTo(100, 200)
// ctx.lineTo(50, 50)
// // ctx.closePath()
// ctx.fillStyle= 'blue'
// ctx.fill()

// ctx.beginPath()
// ctx.moveTo(200, 50)
// ctx.lineTo(150, 200)
// ctx.lineTo(250, 200)
// ctx.closePath()
// ctx.stroke()

// // Rectangle
// ctx.beginPath()
// ctx.rect(300, 50, 150, 100)
// ctx.fillStyle = 'teal'
// ctx.fill()

// Arc (ympyrät)
// ctx.beginPath()

// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;

// // Draw head
// ctx.arc(centerX, centerY, 200, 0, Math.PI * 2)

// // move to mouth
// ctx.moveTo(centerX + 100, centerY)

// // draw mouth
// ctx.arc(centerX, centerY, 100, 0, Math.PI, false)

// // move to left eye
// ctx.moveTo(centerX - 60, centerY - 80,)
  
// //draw left eye
// ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2)

// // move to right eye
// ctx.moveTo(centerX + 100, centerY - 80)

// // draw right eye
// ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2)

// ctx.stroke()

// ctx.beginPath();
//     ctx.moveTo(75, 25);
//     ctx.quadraticCurveTo(25, 25, 25, 62.5);
//     ctx.quadraticCurveTo(25, 100, 50, 100);
//     ctx.quadraticCurveTo(50, 120, 30, 125);
//     ctx.quadraticCurveTo(60, 120, 65, 100);
//     ctx.quadraticCurveTo(125, 100, 125, 62.5);
//     ctx.quadraticCurveTo(125, 25, 75, 25);
//     ctx.stroke();


// ctx.stroke()

// animation 1



// update ()

// animation 1 ja 2 samassa

const image = document.getElementById('source')

const circle = {
    x: 30,
    y: 30,
    size: 30,
    dx: 10,
    dy: 10
}

const circle2 = {
    x: 570,
    y: 570,
    size: 30,
    dx: 10,
    dy: 10
}

const player = {
    w: 50,
    h: 70,
    x: 30,
    y: 270,
    speed: 15,
    dx: 0,
    dy: 0, 
};

function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'purple';
    ctx.fill();
}

function drawCircle2() {
    ctx.beginPath();
    ctx.arc(circle2.x, circle2.y, circle2.size, 0, Math.PI * 2);
    ctx.fillStyle = 'teal';
    ctx.fill();
}


function drawPlayer() {
    ctx.drawImage(image, player.x, player.y, player.w,
        player.h);
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function newpos() {
    player.x += player.dx
    player.y += player.dy

    detectWalls()
}

function detectWalls() {
    // Left wall
    if (player.x < 0) {
        player.x = 0
    }

    // Right wall
    if (player.x + player.w > canvas.width) {
        player.x = canvas.width - player.w
    }

    if (player.y < 0) {
        player.y = 0
    }

    if (player.y + player.h > canvas.height) {
        player.y = canvas.height - player.h
    }

}

function update() {
    clear()
    drawPlayer()
    newpos()

    drawCircle()
    drawCircle2()
    // change position
    circle.x += circle.dx
    circle.y += circle.dy
    circle2.x += circle2.dx
    circle2.y += circle2.dy

    if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0)  {
        circle.dx *= -1; // circle.dx = circle.dx * -1
    }

    if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0)  {
        circle.dy *= -1; // circle.dx = circle.dx * -1
    }

    if(circle2.x + circle2.size > canvas.width || circle2.x - circle2.size < 0)  {
        circle2.dx *= -1; // circle.dx = circle.dx * -1
    }

    if(circle2.y + circle2.size > canvas.height || circle2.y - circle2.size < 0)  {
        circle2.dy *= -1; // circle.dx = circle.dx * -1
    }

    // pallojen kolinat

    if(circle.x === circle2.x && circle.y === circle2.y)  {
        console.log('collision')
        circle.dx *= -1;
        circle2.dx *= -1;
    }

    requestAnimationFrame(update)
}

function moveUp () {
    player.dy = -player.speed;
}
function moveDown () {
    player.dy = player.speed;
}
function moveRight () {
    player.dx = player.speed;
}
function moveLeft () {
    player.dx = -player.speed;
}

function keyDown(e) {
    if(e.key === 'ArrowRight' || e.key === 'Right') {
        moveRight();
    }   else if(e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft();
    }   else if(e.key === 'ArrowUp' || e.key === 'Up') {
        moveUp();
    }   else if(e.key === 'ArrowDown' || e.key === 'Down') {
        moveDown();
    }
}

function keyUp(e) {
    if (
        e.key == 'Right' ||
        e.key == 'ArrowRight' ||
        e.key == 'Left' ||
        e.key == 'ArrowLeft' ||
        e.key == 'Up' ||
        e.key == 'ArrowUp' ||
        e.key == 'Down' ||
        e.key == 'ArrowDown'
    ) {
        player.dx = 0;
        player.dy = 0;
    }
}

update()

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
