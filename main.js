
var imageSources = ["assets/c0.png", "assets/c1.png", "assets/c2.png"]

var index = 0;
setInterval(function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("image").src = imageSources[index];
  index++;
}, 125);
