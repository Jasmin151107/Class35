var ball;
var database;
var ball_pos_ref;
var ball_pos_in_db;


function setup(){
    createCanvas(500,500);
 database = firebase.database()

 ball_pos_ref = database.ref("ball/position")
 ball_pos_ref.on("value",readPosition);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(ball_pos_in_db!== undefined){
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
}
    drawSprites();
}

function readPosition(data){
ball_pos_in_db = data.val()
ball.x= ball_pos_in_db.x 
ball.y = ball_pos_in_db.y;

}

function writePosition(x,y){
   
    database.ref("ball/position").set({
        x: ball_pos_in_db.x+x,
        y: ball_pos_in_db.y+y
    })
}
