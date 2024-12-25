const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const unit = 30;
const row = canvas.height / unit; // 320 / 20 = 16
const column = canvas.width / unit; // 320 / 20 = 16
//劃出棒子 讓棒子跟著滑鼠走

// class Ball {
//   constructor() {
//     this.x = Math.floor(Math.random() * row) * unit;
//     this.y = Math.floor(Math.random() * column) * unit;
//   }

//   drawBall() {
//     let new_x;
//     let new_y;

//     for (let i = 0; i < 7; i++) {
//       new_x = Math.floor(Math.random() * row) * unit;
//       new_y = Math.floor(Math.random() * column) * unit;
//       ctx.fillStyle = "red";
//       ctx.fillRect(new_x, new_y, unit, unit);
//       console.log(`果实位置: x=${this.x}, y=${this.y}`);
//       console.log(i);
//     }
//   }
// }

// let myBall = new Ball();
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

  ctx.fillStyle = "yellow";
  ctx.fillRect(mouseX - 50, 500, 100, 20);
}

// canvas.addEventListener("mousemove", draw);

setInterval(draw, 100);
