var res = 0;

function calculator() {
	var text = document.getElementsByTagName("input")[0];
	var a = text.value;
	var text = document.getElementsByTagName("input")[4];
	var e = text.value;
	var text = document.getElementsByTagName("input")[8];
	var i = text.value;
	var text = document.getElementsByTagName("input")[5];
	var f = text.value;
	var text = document.getElementsByTagName("input")[7];
	var h = text.value;
	var A = (a*(e*i-f*h));

	var text = document.getElementsByTagName("input")[1];
	var b = text.value;
	var text = document.getElementsByTagName("input")[3];
	var d = text.value;
	var text = document.getElementsByTagName("input")[8];
	var i = text.value;
	var text = document.getElementsByTagName("input")[5];
	var f = text.value;
	var text = document.getElementsByTagName("input")[6];
	var g = text.value;
	var B = (b*(d*i-f*g));
	
	var text = document.getElementsByTagName("input")[2];
	var c = text.value;
	var text = document.getElementsByTagName("input")[3];
	var d = text.value;
	var text = document.getElementsByTagName("input")[7];
	var h = text.value;
	var text = document.getElementsByTagName("input")[4];
	var e = text.value;
	var text = document.getElementsByTagName("input")[6];
	var g = text.value;
	var C = (c*(d*h-e*g));

	res = (A - B + C);
}

var find = document.querySelector('button');
find.onclick = function(){
	var result = document.querySelector('#result');
	calculator();
	result.textContent = res;
}