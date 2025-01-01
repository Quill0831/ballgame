const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const unit = 30;
const canvasWidth = 950;
const canvasHeight = 550;
let ballArray = [];
let xSpeed = 20;
let ySpeed = 20;
let circle_x = 160;
let circle_y = 60;
let radius = 20;

const row = canvas.height / unit; // 320 / 20 = 16
const column = canvas.width / unit; // 320 / 20 = 16
//劃出棒子 讓棒子跟著滑鼠走

//隨機生成目標球體的位置
function getRandomArbitrary(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

//移動球體
class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

//做出ball
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    //做出來以後放到array裡面;
    ballArray.push(this);
    this.visible = true;
  }

  drawBall() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

for (let i = 0; i < 10; i++) {
  new Ball(getRandomArbitrary(0, 850), getRandomArbitrary(0, 450));
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
  //球體動起來

  circle_x += xSpeed;
  circle_y += ySpeed;

  //球撞牆回彈
  if (circle_x >= canvasWidth - radius) {
    xSpeed *= -1;
  } else if (circle_y >= canvasHeight - radius) {
    ySpeed *= -1;
  } else if (circle_x < 0) {
    xSpeed *= -1;
  } else if (circle_y < 0) {
    ySpeed *= -1;
  }

  //劃出棒子 跟著滑鼠的X座標走
  ctx.fillStyle = "yellow";
  ctx.fillRect(mouseX - 50, 500, 100, 20);

  //畫出目標球體
  ballArray.forEach((ball) => {
    ball.drawBall();
  });

  // 畫出圓球
  ctx.beginPath();
  ctx.arc(circle_x, circle_y, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = "yellow";
  ctx.fill();
}

//做出會動的box

setInterval(draw, 10);
