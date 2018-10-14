var text = document.querySelectorAll("button");
for(var i = 0; i < text.length; i++){
	text[i].addEventListener('click',function(event){
		event.currentTarget.parentNode.setAttribute('data-status', "done");
	})};