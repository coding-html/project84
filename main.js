canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d")
car1_width=120;
car1_height=70;
car1_image="car1.jpg";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="car2.jpg";
car2_x=10;
car2_y=100;
background_picture="racing.jpg";
function add()
{
    background_imgTag= new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_picture;

    background_imgTag= new Image();
    background_imgTag.onload=uploadcar1;
    background_imgTag.src=car1_image;

    background_imgTag= new Image();
    background_imgTag.onload=uploadcar2;
    background_imgTag.src=car2_image;
}
function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2()
{
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed= e.keycode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        car1_up();
        console.log("up arrow key")
    }

    if(keyPressed=='40')
    {
        car1_up();
        console.log("down arrow key")
    }

    if(keyPressed=='39')
    {
        car1_up();
        console.log("right arrow key")
    }

    if(keyPressed=='37')
    {
        car1_up();
        console.log("left arrow key")
    }

    if(keyPressed=='87')
    {
        car2_up();
        console.log("w arrow key")
    }

    if(keyPressed=='65')
    {
        car2_up();
        console.log("a arrow key")
    }

    if(keyPressed=='68')
    {
        car2_up();
        console.log("d arrow key")
    }

    if(keyPressed=='83')
    {
        car2_up();
        console.log("s arrow key")
    }
}

