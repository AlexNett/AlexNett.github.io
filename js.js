
$(function(){
	var mouse = {
		x: 0,
		y: 0
	}
	
	window.addEventListener('mousemove', function(event){
		mouse.x = event.x;
		mouse.y = event.y;
	});
	
	var ctx=document.getElementById("background");
	var C=ctx.getContext("2d");
	var cc = $('canvas');

	function Circle(x, y, r, Vx, Vy, a, g)
	{
		this.x = x;
		this.y = y;
		this.r = r;
		this.Vy = Vy;
		this.Vx = Vx;
		this.a = a;
		this.g = g;
		this.draw = function()
		{
			C.fillStyle="#e83535";
			C.beginPath();
			C.arc(this.x,this.y,r,0,2*Math.PI);
			C.fill();
		}
		this.update = function()
		{
			if (this.x + r >= window.innerWidth || this.x - r <= 0 || this.y + r >= window.innerHeight || this.y - r <= 0)
			{
				if (this.x + this.r >= window.innerWidth)	{Vx = -Vx*a; this.x = window.innerWidth - this.r}
				if (this.x - this.r <= 0)					{Vx = -Vx*a; this.x = 0 + this.r}
				if (this.y + this.r >= window.innerHeight)	{Vy = -Vy*a; this.y = window.innerHeight - this.r; Vx *= a}
				if (this.y - this.r <= 0)					{Vy = -Vy*a; this.y = 0 + this.r}
			}
			else 											{Vy += g;}
			this.y += Math.ceil(Vy);
			this.x += Vx;
			this.draw();
			
			//interactivity
			if( mouse.x - this.x < r && mouse.x - this.x > -r && mouse.y - this.y < r && mouse.y - this.y > -r) {
				Vy = mouse.y - this.y;
				Vx = mouse.x - this.x;
			}
		}
	}
	
	ball = new Circle(26,window.innerHeight/2,35,10,-10,0.8,1)
	
	//animate
	function animate(){
		requestAnimationFrame(animate);
		cc.attr("width",window.innerWidth).attr("height",window.innerHeight);
		C.clearRect(0,0,window.innerWidth,window.innerHeight);
		ball.update();
	}
	animate();
});