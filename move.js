$(document).ready(function () {
    animateDiv('.cockroach');

});

function makeNewPosition() {

    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    var rect = image.getBoundingClientRect();
    console.log(rect.y, rect.x)


    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    var p1 = {
        x: rect.y,
        y: rect.x
    };

    var p2 = {
        x: nh,
        y: nw
    };

    var angleDeg = 180-Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    
        // if (angleDeg >= 0 && angleDeg <= 180) {
        //     angleDeg = 180 - angleDeg;
        // }
        // else if (angleDeg >= 181 && angleDeg <= 360) {
        //     angleDeg = 360+angleDeg;
        // }
    
    console.log(nh, nw)
    console.log(angleDeg)
    return [nh, nw, angleDeg];

}

function animateDiv(myclass) {
    var newq = makeNewPosition();
    $('#image').animate(
        { deg: newq[2] },
        {
          duration: 2000,
          step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );
    $(myclass).animate({ top: newq[0], left: newq[1] }, 4000, function () {
        animateDiv(myclass);
    });

};
