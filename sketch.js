var bg, bgI, jerry, tom, jerryResting, tomResting, jerryWalking, tomWalking, jerryStopping, tomStopping;
function preload() {
    bgI=loadImage("images/garden.png");
    jerryResting=loadImage("images/mouse1.png");
    tomResting=loadImage("images/cat1.png");
    tomWalking=loadImage("images/cat2.png");
    jerryStopping=loadImage("images/mouse4.png");
    //tomStopping=loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //bg=createSprite(500, 400, 1000, 800);
    //bg.addImage(bgI);
    jerry=createSprite(300, 670, 50, 50);
    jerry.addImage(jerryResting);
    jerry.scale=0.15;
    tom=createSprite(700, 670, 50, 50)
    tom.addImage(tomResting);
    tom.scale=0.15;
    jerry.debug=true;
    tom.debug=true;
}

function draw() {
tom.velocityX=0;

console.log("jerry"+jerry.x);
console.log("tom"+tom.x);
    background(bgI);
    if (tom.x-jerry.x<(tom.width+-jerry.width)/2){  
        tom.velocityX=0;
        //tom.addImage(tomStopping);
        jerry.addImage(jerryStopping);
    }
    if (keyDown("left")){
        tom.velocityX=-3;
        tom.addImage(tomWalking);
    }
    drawSprites();
}
