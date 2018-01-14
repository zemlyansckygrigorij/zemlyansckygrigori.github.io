

function number_0(){  
	form2.elements.labl.value = form2.elements.labl.value + 0;
	}
	function number_1(){  
	form2.elements.labl.value = form2.elements.labl.value + 1;
	}
	function number_2(){  
	form2.elements.labl.value = form2.elements.labl.value + 2;
	}function number_3(){  
	form2.elements.labl.value = form2.elements.labl.value + 3;
	}
	function number_4(){  
	form2.elements.labl.value = form2.elements.labl.value + 4;
	}
	function number_5(){  
	form2.elements.labl.value = form2.elements.labl.value + 5;
	}
	function number_6(){  
	form2.elements.labl.value = form2.elements.labl.value + 6;
	}
	function number_7(){  
	form2.elements.labl.value = form2.elements.labl.value + 7;
	}
	function number_8(){  
	form2.elements.labl.value = form2.elements.labl.value + 8;
	}
    function number_9(){  
	form2.elements.labl.value = form2.elements.labl.value + 9;
	}
	function plusmn(){  
	form2.elements.labl.value = parseFloat(form2.elements.labl.value) *(-1);
	}
function decimal(){  
	form2.elements.labl.value = form2.elements.labl.value + ".";
	}
	function multi(){  
	form2.elements.hid1.value = form2.elements.labl.value;
	form2.elements.labl.value = '';
	form2.elements.hid2.value = '*';
	}
	function segment(){  
	form2.elements.hid1.value = form2.elements.labl.value;
	form2.elements.labl.value = '';
	form2.elements.hid2.value = '/';
	}
	function add(){  
	form2.elements.hid1.value = form2.elements.labl.value;
	form2.elements.labl.value = '';
	form2.elements.hid2.value = '+';
	}
	function subtraction(){  
	form2.elements.hid1.value = form2.elements.labl.value;
	form2.elements.labl.value = '';
	form2.elements.hid2.value = '-';
	}
function COUNT(){
	
	var operator_2 = minus(form2.elements.labl.value)
	var operator_1 = minus(form2.elements.hid1.value)
	if (form2.elements.hid2.value == '*'){
	form2.elements.labl.value = operator_1 * operator_2;
		}
	if (form2.elements.hid2.value == '/'){
	form2.elements.labl.value =  operator_1 / operator_2;
		}
	if (form2.elements.hid2.value == '+'){
	form2.elements.labl.value = operator_1 +operator_2;
		}
	if (form2.elements.hid2.value == '-'){
	form2.elements.labl.value =  operator_1 - operator_2;
		}
}
function C(){

	form2.elements.labl.value = '';
	form2.elements.hid1.value = '';
	form2.elements.hid2.value = '';
}
function minus(x){
	var y = 1;
    if (x[0]=="-"){
		y = -1;
		x = x.substring(1);
	} 
	x = parseFloat(x)* y;
	return x;
}