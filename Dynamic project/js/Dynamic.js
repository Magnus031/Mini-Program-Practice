const zju = document.getElementById('zju');
//拿到浏览器窗口宽高
const w_width = window.screen.availWidth;
const w_height = window.screen.availHeight;

//初始位置
let width = 200;
let height = 200;
//图片移动速度
let vx = 30;
let vy = 30;
//改变图片位置
function movePos(){
	width = (width + vx)%(w_width-300);
	height = (height+vy)%(w_height-300);
	zju.style.left = width + 'px';
	zju.style.top = height + 'px';
}

setInterval(movePos,1000);

