noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup() {
video=createCapture(VIDEO);
video.size(400,400);
video.position(430,130);

canvas=createCanvas(400,400);
canvas.position(930,130);

poseNet=ml5.poseNet(video,modalLoaded);
poseNet.on("pose",gotPoses);
}

function modalLoaded() {
console.log("Modal loaded");
}

function draw () {
background("#177, 107, 209");
textSize(difference);
fill("#FFE787");
text("Jiya",noseX,noseY);
}

function gotPoses(results) {
if(results.length>0) {
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
}
}