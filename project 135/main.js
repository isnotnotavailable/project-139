img="";
status="";

function preload() {
    img= loadImage('bottles.jpg')
}

function modelLoaded() {
    console.log("ModelLoaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    }
    console.log(results)

}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects"
}

function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
        for (i = 0; i < objects.length; i++)
        {
        fill("#f56c42")
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke("#f56c42");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}