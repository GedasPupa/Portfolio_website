// Change the text between the quotation marks and run your code to see the name of your favorite language animated!
drawText('Sveikinu su gimtadieniu, Mamyte! :)');

// The code below will allow you to interact with the letters
bounceBubbles();

function blooming() {
    var image = document.getElementById('img');
    if (image.src.match("flower")) {
    image.src = "sirdute.jpg";
    } else {
    image.src = "flower.jpg";
    }
};

