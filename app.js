const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const unit = 30;
let ballArray = [];
const row = canvas.height / unit; // 320 / 20 = 16
const column = canvas.width / unit; // 320 / 20 = 16
//劃出棒子 讓棒子跟著滑鼠走

function getRandomArbitrary(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    ballArray.push(this);
    this.visible = true;
  }

  drawBall() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

for (let i = 0; i < 10; i++) {
  new Ball(getRandomArbitrary(0, 950), getRandomArbitrary(0, 550));
  console.log(ballArray);
}

let myBall = new Ball();
let mouseX;
let mouseY;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX; // 滑鼠相對於視窗左上角的 X 座標
  mouseY = event.clientY; // 滑鼠相對於視窗左上角的 Y 座標
});
function draw() {
  //畫面塗黑
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //劃出棒子 跟著滑鼠的X座標走
  ctx.fillStyle = "yellow";
  ctx.fillRect(mouseX - 50, 500, 100, 20);

  //畫出球體
  ballArray.forEach((ball) => {
    ball.drawBall();
  });
}

// canvas.addEventListener("mousemove", draw);

setInterval(draw, 10);
