var image;

function upload() {
    var imgCanvas = document.getElementById("can");
    var fileInput = document.getElementById("finput");
    image = new SimpleImage(fileInput);
    image.drawTo(imgCanvas)
}

function makeGray() {
    for (var pixel of image.values()){
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var imgCanvas =document.getElementById("can");
    image.drawTo(imgCanvas);
}
