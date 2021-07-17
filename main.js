function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Model is Loaded!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("started");
    }
}