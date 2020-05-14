var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var head = document.getElementById("heading");
var newColors = document.getElementById("newColors");
var mode = document.getElementsByClassName("mode");

var len=6;
var colors = [];
var pickedColor;

init();

newColors.addEventListener("click",reset);

function changeColors(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor()
{
    var random =  Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num) 
{
     var arr = [];
     for(var i=0;i<num;i++)
     {
        arr.push(randomColor())
     }
    return arr;
}

function randomColor() 
{
    var color;
    var r= Math.floor(Math.random()*256);
    var g= Math.floor(Math.random()*256);
    var b= Math.floor(Math.random()*256);
    color = "rgb(" +r +(", ") +g +(", ") +b +(")");
    return color;
}

function reset()
{
    colors = generateColors(len);
    for(var i=0;i<squares.length;i++)
    {   
        if(colors[i])
        {
        squares[i].style.display="block";
        squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display="none";
        }
    }
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    head.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    newColors.textContent = "New Colors";
}

function init()
{
modes();
basic();  
reset();
}

function modes()
{
    for(var i=0;i<mode.length;i++)
{
    mode[i].addEventListener("click", function()
    {
    mode[0].classList.remove("selected");
    mode[1].classList.remove("selected");
    this.classList.add("selected");
    if(this.textContent === "Easy")
    {
        len=3;
    }
    else
    {
        len=6;
    }
    reset();
   }
   )
}
}

function basic()
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].addEventListener("click", function() 
        {
            var clickedColor=this.style.backgroundColor;
            if(clickedColor===pickedColor)
            {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            head.style.backgroundColor = pickedColor;
            newColors.textContent = "Play Again";
            }
            else
            {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            }
        }
        )
    }
}