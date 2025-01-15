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
ctx.beginPath()

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Draw head
ctx.arc(centerX, centerY, 200, 0, Math.PI * 2)

// move to mouth
ctx.moveTo(centerX + 100, centerY)

// draw mouth
ctx.arc(centerX, centerY, 100, 0, Math.PI, false)

// move to left eye
ctx.moveTo(centerX - 60, centerY - 80,)
  
//draw left eye
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2)

// move to right eye
ctx.moveTo(centerX + 100, centerY - 80)

// draw right eye
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2)

ctx.stroke()

ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();


ctx.stroke()

