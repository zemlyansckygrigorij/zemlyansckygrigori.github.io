
var  i,j,x,y ,str,move,str1;
i= 10;//i
j= 10;
x = 5 ;
y = 30;
var div = document.getElementById('div1');
var timer = setInterval(function() { 

    x = x+i;
	y = y+j;
    move = y+'px; left: '+x+'px">';
  	


div.innerHTML = '<div id = "div_main_image" style="position: absolute; top: '+y+'px; left: +'+x+'px"><img id = "main_image" src = "img/soccer_ball_spins.gif"></div>';

if (y==400) {j = j *(-1);}
if (y==30) {j = j *(-1);}
if (x==1125) {i = i *(-1);}
if (x==5) {i = i *(-1);}
  }, 
  100);

