function Refresh()
{
	var text1 = document.getElementById("@text").innerHTML;
}
//Loop
function deltaTime()
{
	current = (new Date()).getTime();
	elapsed = current - start;
	start = current;
	var delta = elapsed / 1000;			
	return delta;
}
function NoLoopTimeout()
{
	LoopCall += deltaTime() * 300;
	if(LoopCall>1)
	{
		loop();
		LoopCall -= 1;
	}
	setTimeout(NoLoopTimeout, 1);
}
function loop()
{
	Refresh();
}
loop();
NoLoopTimeout();