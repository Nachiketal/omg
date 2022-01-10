canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car_width = 225;
car_height = 135;
car_x = 10;
car_y = 465;
car_image = "Car right.png";
background_image = "Parking 1.jpg";
access = "right";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;           
    uploadcar();
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
    if(access == "right") {
        car_width = 225;
        car_height = 135;
        car_image = "Car right.png";
        car_imgTag = new Image();
        car_imgTag.onload = uploadcar;
        car_imgTag.src = car_image;
    }
    if(access == "down") {
        car_width = 135;
        car_height = 225;
        car_image = "Car down.png";
        car_imgTag = new Image();
        car_imgTag.onload = uploadcar;
        car_imgTag.src = car_image;
    }
    if(access == "up") {
        car_width = 135;
        car_height = 225;
        car_image = "Car up.png";
        car_imgTag = new Image();
        car_imgTag.onload = uploadcar;
        car_imgTag.src = car_image;
    }
    ctx.drawImage(car_imgTag, car_x,  car_y, car_width, car_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
}
function up() {
    if(car_y >= 0)
    {
        car_y -= 10;
        access = "up";
        console.log("When up arrow is pressed = " + car_x + " - " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function down() {
    if(car_y <=465) {
        car_y += 10;
        access = "down";
        console.log("When down arrow is pressed = " + car_x + " - " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function  left() {
    if(car_x >= 0) {
        car_x -=10;
        access = "left";
        console.log("When left arrow is pressed = " + car_x + " - " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function right() {
    if(car_x <= 575)
    {
        car_x += 10;
        access = "right";
        console.log("When right arrow is pressed = " + car_x + " - " + car_y);
        uploadBackground();
        uploadcar();
    }

}

