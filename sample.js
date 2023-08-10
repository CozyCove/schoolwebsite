//document.addEventListener('DOMContentLoaded', function () {
//    //storing orig background color
//    var originalBackgroundColor = document.body.style.backgroundColor;
//
//    document.getElementById('ghost').addEventListener('click', function () {
//        if (document.body.style.backgroundColor === originalBackgroundColor) {
//            // change the background color
//            document.body.style.backgroundColor = "rgb(20,100,50)";
//
//        } else {
//            // revert back to the original background color
//            document.body.style.backgroundColor = originalBackgroundColor;
//        }
//    });
//
//});
document.addEventListener('DOMContentLoaded', function () {
    var ghost = document.getElementById("ghost");
    var numberContainer = document.getElementById("counter_container");
    var clickCount = 0;
    ghost.addEventListener("mousedown", function ()     {
        var newX = Math.random() * (window.innerWidth - ghost.width);
        var newY = Math.random() * (window.innerHeight - ghost.height);


        ghost.style.left = newX + 'px';
        ghost.style.top = newY + 'px';
         
    clickCount++;
    updateNumber(clickCount);
    });
    function updateNumber(count) {
        numberContainer.innerText = "Clicks: " + count;
    }
});
