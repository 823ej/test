var imgArray= new Array();
for (var i = 0; i<22; i++){
    var img = new Image();
    img.src = "img/"+i+".png";
}

function letsPickTheNum() {
    let IndexNum = [];
    let i = 0;
    while (i < 3) {
    let n = Math.floor(Math.random() * 21);
    if (notSame(n)) {
    IndexNum.push(n);
    i++;
    }
    }
    function notSame (n) {
    return IndexNum.every((e) => n !== e);
    }
    return IndexNum;
    
}

function pickup_click() {
// document.write(letsPickTheNum());
document.getElementById("home").style.display="none";
document.getElementById("layout0").style.display="inline-block";
document.getElementById("layout1").style.display="inline-block";
document.getElementById("layout2").style.display="inline-block";

document.getElementById("pick1").src="img/"+letsPickTheNum[0]+".png";
document.getElementById("pick2").src="img/"+letsPickTheNum[1]+".png";
document.getElementById("pick3").src="img/"+letsPickTheNum[2]+".png";
}
   
 


