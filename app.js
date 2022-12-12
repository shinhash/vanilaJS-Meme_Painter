const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 50, 50, 50);
ctx.fillRect(100, 100, 50, 50);
ctx.fillRect(150, 150, 50, 50);
ctx.fillRect(200, 200, 50, 50);
ctx.fillRect(250, 250, 50, 50);


ctx.rect(350, 350, 50, 50);
ctx.rect(400, 400, 50, 50);
ctx.fill();

ctx.beginPath();
ctx.rect(450, 450, 50, 50);
ctx.fillStyle = "red";
setTimeout(() => {
    ctx.fill();
}, 5000);


ctx.clearRect(75, 75, 50, 50);
ctx.clearRect(125, 125, 50, 50);
ctx.clearRect(175, 175, 50, 50);
ctx.clearRect(225, 225, 50, 50);