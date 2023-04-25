$(document).ready(function(){
    animateDiv('.cockroach');

});

function makeNewPosition(){
    
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    var rect = image.getBoundingClientRect();
   console.log(rect.x,rect.y)
    
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    var p1 = {
        x: rect.x,
        y: rect.y
    };
    
    var p2 = {
        x: nh,
        y: nw
    };
    
    var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    console.log(nh,nw)
    console.log(angleDeg)
    return [nh,nw,angleDeg];    
    
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 10000,   function(){
        rotateDiv(newq[2]);
        animateDiv(myclass);        
      });
    
};
function rotateDiv(angle){
    console.log(angle)
$("#image").css("transform", "rotate("+angle+"deg)");
}