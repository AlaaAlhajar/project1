function havorButton()
{
document.getElementById("butt").style.backgroundColor = "#080" ;
}

function havor(){
    document.getElementById("butt").style.backgroundColor ="#00BC8a" ;
    }

    function show(){
        document.getElementById("show").style.visibility ="visible" ;  

    }
    function hide(){
        document.getElementById("show").style.visibility ="hidden" ;  

    }
    var a,b,c ;
    a=0;b=0;c=0;
    function havoredimg1(){
        a++;
        document.getElementById("img1").innerHTML= a;  
    }
    function havoredimg2(){
        b++;
        document.getElementById("img2").innerHTML= b;  
    }
    function havoredimg3(){
        c++;
        document.getElementById("img3").innerHTML= c;  
    }
    function HideImage1(){
        document.getElementById("image1").style.visibility ="hidden";
    }
    function ShowImage1(){
        document.getElementById("image1").style.visibility ="visible";
    }
    function clicktwitter(){
        document.getElementById("clicktwitter").style.color="red";
        document.getElementById("clicktwitter").style.textDecoration="underline";
    }
    function valid(){
        var t = prompt("Name....");
        if(t=="hamza"){
        window.location="file.html"
        }else{
            alert("Rong name")
        }

    }