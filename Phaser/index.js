const config = {
    type: Phaser.AUTO,
    width:800,
    height:800,
    scene:{
        preload: preload,
        create: create,
        update: update,
    },
    physics:{
        default:"arcade",
        arcade:{
            gravity:{y:300},
            debug:false,
        },
    },
};

const game =new Phaser.Game(config);
let platform;
let player;

function preload(){
    this.load.image("sky", "assets/test.png");
    this.load.image("ground", "assets/platform.png");
    this.load.image("star", "assets/star.png");
    this.load.image("bomb", "assets/bomb.png");
    this.load.spritesheet("dude", "assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    }); 

}
function create(){
    this.add.image(400,300,"sky");

    platform = this.physics.add.staticGroup(); 
    platform.create(100,640,"ground").setScale(2).refreshBody();
    platform.create(600,400,"ground");
    platform.create(50,250,"ground");
    platform.create(750,220,"ground");

    player = this.physics.add.sprite(100, 450, 'dude');
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key:"left",
        frames:this.anims.generateFrameNumbers("dude",{
            start:0,end:3
        }),
        frameRate:10,
        repeat:-1,
    });

    this.anims.create({
        key:"turn",
        frames:[{key:"dude",frame:4}],
        frameRate:20,
    });
    this.anims.create({
        key:"right",
        frames: this.anims.generateFrameNumbers("dude",{start:5,end:8}),
        frameRate:10,
        repeat:-1,
    });
}
function update(){

}