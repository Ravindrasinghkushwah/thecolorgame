// alert("conneted")

    var h1 = document.querySelector("h1");
    var squares = document.querySelectorAll(".square");


    var modesbtn = document.querySelectorAll(".modes");
    var resetbtn = document.querySelector("#reset");

    var colors = generaterandomcolors(6);
    var pickedcolor = pickcolor();


    var displaycolor = document.getElementById("displaycolor");
    displaycolor.textContent = pickedcolor;

init();

function init()
{   
    
    setupsquares();
}

function setupsquares()
{       
    for (var i =0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colors[i];
        
        squares[i].addEventListener("click",function()
        {
            if(pickedcolor == this.style.backgroundColor.replace(/\s/g, ''))
            {   
                h1.style.backgroundColor = pickedcolor;
                
                resetbtn.textContent = "PLAY AGAIN";
                document.querySelector(".selected").style.backgroundColor = pickedcolor;
                
                document.getElementById("message").textContent="CORRECT";
                for (var i =0;i<squares.length;i++)
                    {
                        squares[i].style.backgroundColor = this.style.backgroundColor;
                        
                    }
            }
            else
            {
                this.style.backgroundColor="black";
                document.getElementById("message").textContent="Try again";
            }

        })
    }
}




resetbtn.addEventListener("click",reset);

function reset()
{   
    document.getElementById("message").textContent = "";
    modesbtn[0].style.backgroundColor="white";
    modesbtn[1].style.backgroundColor="white";

    
        h1.style.backgroundColor = "red";
    



    document.querySelector(".selected").style.backgroundColor="red";

    colors = generaterandomcolors(colors.length);
    pickedcolor = pickcolor();
    displaycolor.textContent = pickedcolor;

    for(var i =0;i<colors.length;i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }
    resetbtn.textContent = "NEW COLORS";
}




for (var i=0;i<modesbtn.length;i++)
{
    modesbtn[i].addEventListener("click",function(){
        

        modesbtn[0].classList.remove("selected");
        modesbtn[1].classList.remove("selected");
        this.classList.add("selected");


        displaycolor = document.getElementById("displaycolor");
        displaycolor.textContent = pickedcolor;
        
        if(this.textContent === "EASY")
        {
            colors = generaterandomcolors(3);
            

            for (var i =3;i<6;i++)
            {
                squares[i].style.display ="none";
            }

        }
        else
        {
            colors =generaterandomcolors(6);
            pickedcolor = pickcolor();

            for(var i=0;i<6;i++)
            {
                squares[i].style.display ="block";
            }

        }
        reset();
        })
        
}





function pickcolor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generaterandomcolors(num)
{
    var arr =[];
    for(var i =0;i<num;i++)
    {
        arr.push(randomcolor());
    }
    return arr;
}


function randomcolor()
{
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    var randomcolor = "rgb("+ r+"," + g+"," + b +")"
    return randomcolor;
}
