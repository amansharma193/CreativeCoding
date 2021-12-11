function setup() {
	simple();
}

function draw() {
	// circle(left, top, size)
	// stroke('white');
	for(let i=0;i<50;i++){
		let red=randomNumber(256);
		let blue=randomNumber(256);
		let green=randomNumber(256);
		fill(red,blue,green);
		var x=randomNumber(800);
		var y=randomNumber(600);	
		var r=randomNumber(10,100);
		circle(x,y,r);
	}
	
	// fill('blue');
	// circle(x,y+25,50);
	// fill('red');
	// circle(x,y+50,50);
	// fill('yellow');
	// circle(x,y+75,50);
}
