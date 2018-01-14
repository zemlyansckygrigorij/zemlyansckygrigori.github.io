var  images = [];
var  i,j,str;


images[0]= "img/my_foto.jpg";
images[1]= "img/2.jpg";
images[2]= "img/4.jpg";
images[3]= "img/5.jpg";

i = 0;
var div = document.getElementById('div_my_foto');

  var timer = setInterval(function() { 

  	str = '<img id = "my_foto" src="'+images[i++] +'" width = "600" align="left">' ;
 
	div.innerHTML = str;
  if (i>3){i = 0;}
  }, 
  2000);



