var  HypnoticBall;
var database
var HypnoticBallPosition
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    HypnoticBall = createSprite(250,250,10,10);
    HypnoticBall.shapeColor = "red";
    HypnoticBallPosition = database.ref("ball/position")
    HypnoticBallPosition.on("value", readPosition, showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   database.ref("ball/position").set({
       "x" : position.x + x,
       "y" : position.y + y
   })
}
function readPosition(data){
    position = data.val();
    console.log(position.x)
    HypnoticBall.x = position.x
    HypnoticBall.y = position.y
}                
function showError(){
    console.log("database is having some error")
}