const zju = document.getElementById('zju');
//拿到浏览器窗口宽高
const w_width = window.screen.availWidth;
const w_height = window.screen.availHeight;


function move(){
	zju.style.top=Math.random()*w_height*0.5+'px';
	zju.style.left=Math.random()*w_width*0.5+'px';
}
var timer = setInterval(move,100);

function off(){
	clearInterval(timer);
}
function on(){
	timer = setInterval(move,100);
}