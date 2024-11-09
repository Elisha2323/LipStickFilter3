noseX=0;
noseY=0;

results=0;

function preload(){
   clown_nose = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-27;
        noseY = results[0].pose.nose.y+20;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0 , 0,300 ,300)
    //fill(255,0,0);
   // stroke(255,0,0);
    //circle(noseX,noseY, 20);
    image(clown_nose,noseX, noseY, 60,50)
}

function take_snapshot(){
    save("myFilterImage.png");
}

