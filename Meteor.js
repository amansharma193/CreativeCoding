function setup() {
	simple();
}

function draw() {
	noStroke();
	repeat(100,700,10,balloon);
}

function balloon(x){
	fill(x/2,x/4,128);
	circle(x,300,x/5);
}
