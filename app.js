const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const unit = 30;
const row = canvas.height / unit; // 320 / 20 = 16
const column = canvas.width / unit; // 320 / 20 = 16
//劃出棒子 讓棒子跟著滑鼠走

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// class Ball {
//   constructor() {
//     this.x = Math.floor(Math.random() * row) * unit;
//     this.y = Math.floor(Math.random() * column) * unit;
//     this.hasDrawn = false;
//   }

//   drawBall() {
//     console.log(this.hasDrawn);
//     // 如果已經執行過，直接返回
//     if (this.hasDrawn) return;
//     // 設定新的隨機位置
//     let new_x = Math.floor(Math.random() * row) * unit;
//     let new_y = Math.floor(Math.random() * column) * unit;

//     // 繪製球
//     ctx.fillStyle = "red";
//     ctx.fillRect(new_x, new_y, unit, unit);

//     // 打印位置到控制台
//     console.log(`果实位置: x=${new_x}, y=${new_y}`);

//     // 設置標誌為 true，表示已執行過
//     this.hasDrawn = true;
//   }
// }

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

  myBall.drawBall();
  //劃出棒子 跟著滑鼠的X座標走
  ctx.fillStyle = "yellow";
  ctx.fillRect(mouseX - 50, 500, 100, 20);
}

// canvas.addEventListener("mousemove", draw);

setInterval(draw, 10);
