function loop()
{
	var text="";
	var i;
	for(i=5;i>0;i--)
	{	
		text=text+i+"<br>";
	 }
	document.getElementById("result").innerHTML=text;

}