var images = document.getElementsByTagName("img")
for(var i = 0; i < images.length; i++) {
	images[i].addEventListener('click',function(event){
		var bigImage = document.getElementsByTagName("img")[0]
		bigImage.src = event.currentTarget.getAttribute("src")
})}
