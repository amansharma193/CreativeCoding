function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	strokeWeight(4);	
	noFill();
	let x=100;
	for(let j=0;j<40;j++){
		for(let i=0;i<=1572;i+=10){
			balloon(i,x);
		}
			x+=10;
	}
	// repeat(0,800,10,balloon);
	// repeat(0,800,10,balloon2);
	// repeat(0,800,10,balloon3);
}

function balloon(x,y){
	// let red=randomNumber(256);
	// let blue=randomNumber(256);
	// let green=randomNumber(256);
	stroke(x/4,x/8,128);
	circle(x,y+sin(x)*100,4);
}
function balloon2(x){
	// let red=randomNumber(256);
	// let blue=randomNumber(256);
	// let green=randomNumber(256);
	stroke(x/2,x/4,128);
	circle(x,290+sin(x)*100,4);
}
function balloon3(x){
	// let red=randomNumber(256);
	// let blue=randomNumber(256);
	// let green=randomNumber(256);
	stroke(x/2,x/4,128);
	circle(x,280+sin(x)*100,4);
}
