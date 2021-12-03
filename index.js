var urlArray = ['<img class="image" src="images/image1.jpg">', '<img class="image" src="images/image2.jpg">', '<img class="image" src="images/image3.jpg">', '<img class="image" src="images/image4.png">', '<img class="image" src="images/image5.jpg">'];

function loadImage() {

    var RandomNumber = Math.floor(Math.random() * urlArray.length);

    localStorage.setItem("imageNumber", RandomNumber);
    document.getElementById("imageWrapper").innerHTML = urlArray[RandomNumber];
}

function loadShowpage() {
    var imageNumber = localStorage.getItem("imageNumber");
    document.getElementsByClassName("imageWrapper")[0].innerHTML = urlArray[imageNumber];
    console.log(document.getElementsByClassName("imageWrapper"));
}
