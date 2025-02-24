const canvas = document.querySelector('#c1');
const ctx = canvas.getContext('2d');

// 01

// ctx.fillRect(x, y, w, h);

// ctx.fillStyle = 'red';
// ctx.fillRect(100, 50, 150, 75);
// ctx.fillStyle = 'blue';
// ctx.fillRect(150, 100, 100, 50);

// ctx.clearRect(0, 0, 400, 200);

// ctx.strokeStyle = 'green';
// ctx.lineWidth = 10;
// ctx.rect(50, 10, 100, 100);
// ctx.stroke();
// ctx.fillStyle = 'orange';
// ctx.fill();

// 02

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
ctx.moveTo(100, 50);
ctx.lineTo(150, 150);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.lineWidth = 20;
ctx.moveTo(200, 50);
ctx.lineTo(300, 50);
ctx.lineTo(300, 100);
ctx.lineCap = 'round';
// ctx.lineCap = 'square';
// ctx.lineCap = 'butt';
ctx.stroke();

ctx.clearRect(0, 0, 400, 200);

ctx.beginPath();
// ctx.strokeStyle = 'blue';
// ctx.lineWidth = 20;
ctx.moveTo(50, 150);
ctx.lineTo(150, 50);
ctx.lineTo(200, 150);
// ctx.lineTo(50, 150);
ctx.lineWidth = 10;
// ctx.lineCap = 'round';
ctx.fillStyle = 'orange';
ctx.fill();
// ctx.lineCap = 'square';
// ctx.lineCap = 'butt';
ctx.closePath();
ctx.stroke();
