var but1 = document.querySelector("#bussiness");
var but2 = document.querySelector("#politics");
var but3 = document.querySelector("#sport");
var div = document.querySelector("#news");
but1.addEventListener('click', function(){
	div.innerHTML = "";
	return fetch("http://demo4296963.mockable.io/news-bussiness")
		.then(res => res.text())
		.then(text => div.innerHTML = text)	
})
but2.addEventListener('click', function(){
	div.innerHTML = "";
	return fetch("http://demo4296963.mockable.io/news-politics")
		.then(res => res.text())
		.then(text => div.innerHTML = text)	
})
but3.addEventListener('click', function(){
	div.innerHTML = "";
	return fetch("http://demo4296963.mockable.io/news-sport")
		.then(res => res.text())
		.then(text => div.innerHTML = text)	
})