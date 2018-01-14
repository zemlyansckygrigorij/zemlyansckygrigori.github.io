var  images = [];
var  i,j,insert_str;
images[0]= "img/a1.jpg";
images[1]= "img/e1.jpg";
images[2]= "img/f1.jpg";
images[3]= "img/q1.jpg";
images[4]= "img/s1.jpg";
images[5]= "img/b1.jpg";
images[6]= "img/c1.jpg";
images[7]= "img/z1.jpg" ;
images[8]= "img/x1.jpg";
images[9]= "img/v1.jpg";
images[10]= "img/b1.jpg";

function image_insert(i) {                            /*insert selected image into main_image (вставить картинку на место основной)*/ 
	var div = document.getElementById('div_main_image');             /* get element with id = div_main_image(получить элемент с идентификатором = div_main_image)  */
	div.innerHTML = '<br><image id = "main_image" src='+images[i] +' width = "600" onClick="image_remove();" onmouseover  ="border_color();" onmousewheel = "main_image_size();">' ;          /* create child element (создаем дочерний элемент для id = div_main_image)*/
}

function image_remove()/*delete bottom image from element with id = div_main_image (удалить нижнюю картинку на место основной)*/ 
{
var div = document.getElementById('div_main_image');/* get element with id = div_main_image(получить элемент с идентификатором = div_main_image)  */
var str, last_Index;//enter variable
str = div.innerHTML;	// 
last_Index = str.lastIndexOf('<br>');
str = str.substring(0,last_Index);
div.innerHTML = str;
}

function image_add()
{
	
	var div = document.getElementById('div_main_image');
	var str,str1 ;
	str = div.innerHTML;
	last_Index = str.lastIndexOf('<img');
	str1 = str.substring(last_Index);
	j = 0;
	 for (i = 0; i<10 ;i++)
	 {
		if (str1.indexOf(images[i]) > -1)
	    {
		  j = i; 
	    }  
	 }
     j = j + 1; 
	 if (j>10)
	 {
		j = 0; 
	 }
	 str = str + '<br><image src='+images[j] +' width = "600" onClick="image_remove();">' ;
	 div.innerHTML = str;

   }
   function forward()
   {
	 var div = document.getElementById('main_image');
	 var str ;
     str = div.src;
	
	 image_width = div.width;
	 j = 0;
	 for (i = 0; i<10 ;i++)
	 {
		if (str.indexOf(images[i]) > -1)
	    {
		  j = i; 
	    }  
	 }
     j = j + 1; 
	 if (j>10)
	 {
		j = 0; 
	 }
     div.src = images[j];
   }
function backward()
   {
	 var div = document.getElementById('main_image');
	 var foundPos,str ;
     str = div.src;
	 j = 0;
	 for (i = 0; i<10 ;i++)
	 {
		if (str.indexOf(images[i]) > -1)
	    {
		  j = i; 
	    }  
	 }
     j = j - 1; 
	 if (j<0)
	 {
		j = 10; 
	 }
     div.src = images[j];
   }
   function border_color()
  {
   var image_border_color
var div = document.getElementById("main_image");

var border_color = document.getElementById('select_color').value; 
image_border_color = 'border: 4px solid '+ border_color +';'

div.setAttribute('style', image_border_color);	 
  
  }

function  background_image()
{
	var div = document.getElementById('div_main_image');
	var body_div = document.body;

	var str,str1,last_Index, new_background_image ;
	str = div.innerHTML;
	last_Index = str.lastIndexOf('<img');
	str1 = str.substring(last_Index);
	j = 0;

	 for (i = 0; i<14 ;i++)
	 {
		if (str.indexOf(images[i]) > -1)
	    {
		  j = i; 
	    }  
	 }
	
     new_background_image = ('background-image:url('+ images[j]+')');

body_div.setAttribute('style', new_background_image);
}

function  color() {
var border_color = document.getElementById('select_color'); 	
var str = "background-color:" + border_color.value + ";";
border_color.setAttribute('style', str);
}


function move(i){
    var str = "image"+i;
	var img = document.getElementById(str);
	document.onmousemove = function() 
	  {
        x =  event.pageX - img.width/2;
	    y =  event.pageY - img.height/2;
	    str = "position:absolute ;left:"+ x  + "px ; top:"+ y + "px ;";
	    img.setAttribute('style', str);
      }
    document.onmouseup = function() 
	  { 
        document.onmousemove = document.onmouseup = null;
      }
    img.ondragstart = function() 
	  {
        return false;
	  }
}
	
function main_image_size(){	
  var elem = document.getElementById('main_image');
  if (elem.addEventListener) 
    {
     if ('onwheel' in document) 
	   {
       // IE9+, FF17+
         elem.addEventListener ("wheel", onWheel, false);
	     alert(document.onwheel.deltaY);
	   } 
	  else if ('onmousewheel' in document) 
	   {alert ("4");
        // устаревший вариант события
       /* elem.addEventListener ("mousewheel", onWheel, false);*/
       }  
	   
	   
	}
}
  
 function onWheel(e) {
  e = e || window.event;

  // deltaY, detail содержат пиксели
  // wheelDelta не дает возможность узнать количество пикселей
  // onwheel || MozMousePixelScroll || onmousewheel
  var delta = e.deltaY || e.detail || e.wheelDelta;

  var elem = document.getElementById('main_image');
elem.width = elem.width +delta;
} 
  
  
  
  
 