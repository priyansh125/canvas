var mouseEvent = "";
var last_position_of_x, last_position_of_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "green";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_the_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_the_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line
        console.log("last position of x and y cordinates =");
        console.log("x=" + last_position_of_x + "y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("current position of x and y cordinates =");
        console.log("x=" + current_position_of_x + "y=" + current_position_of_y);
        ctx.lineTo(current_position_of_the_mouse_x, current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_the_mouse_x;
    last_position_of_y = current_position_of_the_mouse_y;
}