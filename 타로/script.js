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
var boolPast = true; 
var num =letsPickTheNum();
function pickup_click() {
   
document.getElementById("home").style.display="none";
document.getElementById("layout0").style.display="inline-block";
document.getElementById("layout1").style.display="inline-block";
document.getElementById("layout2").style.display="inline-block";
var ForR1 = Math.floor((Math.random()*2));
var ForR2 = Math.floor((Math.random()*2));
var ForR3 = Math.floor((Math.random()*2));
    if(boolPast){
        document.getElementById("layout0").onclick = function() {
            
            document.getElementById("pick1").src="img/"+num[0]+".png";
            boolPast = false
     
            if(ForR1==0){
                if (num[0]==0){
                    document.getElementById("textSpace1").innerText="과거-0";
                } else if (num[0]==1){
                    document.getElementById("textSpace1").innerText="과거-1";
                } else if (num[0]==2){
                    document.getElementById("textSpace1").innerText="과거-2";
                } else if (num[0]==3){
                    document.getElementById("textSpace1").innerText="과거-3";
                } else if (num[0]==4){
                    document.getElementById("textSpace1").innerText="과거-4";
                } else if (num[0]==5){
                    document.getElementById("textSpace1").innerText="과거-5";
                } else if (num[0]==6){
                    document.getElementById("textSpace1").innerText="과거-6";
                } else if (num[0]==7){
                    document.getElementById("textSpace1").innerText="과거-7";
                } else if (num[0]==8){
                    document.getElementById("textSpace1").innerText="과거-8";
                } else if (num[0]==9){
                    document.getElementById("textSpace1").innerText="과거-9";
                } else if (num[0]==10){
                    document.getElementById("textSpace1").innerText="과거-10";
                } else if (num[0]==11){
                    document.getElementById("textSpace1").innerText="과거-11";
                } else if (num[0]==12){
                    document.getElementById("textSpace1").innerText="과거-12";
                } else if (num[0]==13){
                    document.getElementById("textSpace1").innerText="과거-13";
                } else if (num[0]==14){
                    document.getElementById("textSpace1").innerText="과거-14";
                } else if (num[0]==15){
                    document.getElementById("textSpace1").innerText="과거-15";
                } else if (num[0]==16){
                    document.getElementById("textSpace1").innerText="과거-16";
                } else if (num[0]==17){
                    document.getElementById("textSpace1").innerText="과거-17";
                } else if (num[0]==18){
                    document.getElementById("textSpace1").innerText="과거-18";
                } else if (num[0]==19){
                    document.getElementById("textSpace1").innerText="과거-19";
                } else if (num[0]==20){
                    document.getElementById("textSpace1").innerText="과거-20";
                } else {
                    document.getElementById("textSpace1").innerText="과거-21";
                }
            } else {
                this.style.transform="rotate(180deg)";
                if (num[0]==0){
                    document.getElementById("textSpace1").innerText="과거역방향-0";
                } else if (num[0]==1){
                    document.getElementById("textSpace1").innerText="과거역방향-1";
                } else if (num[0]==2){
                    document.getElementById("textSpace1").innerText="과거역방향-2";
                } else if (num[0]==3){
                    document.getElementById("textSpace1").innerText="과거역방향-3";
                } else if (num[0]==4){
                    document.getElementById("textSpace1").innerText="과거역방향-4";
                } else if (num[0]==5){
                    document.getElementById("textSpace1").innerText="과거역방향-5";
                } else if (num[0]==6){
                    document.getElementById("textSpace1").innerText="과거역방향-6";
                } else if (num[0]==7){
                    document.getElementById("textSpace1").innerText="과거역방향-7";
                } else if (num[0]==8){
                    document.getElementById("textSpace1").innerText="과거역방향-8";
                } else if (num[0]==9){
                    document.getElementById("textSpace1").innerText="과거역방향-9";
                } else if (num[0]==10){
                    document.getElementById("textSpace1").innerText="과거역방향-10";
                } else if (num[0]==11){
                    document.getElementById("textSpace1").innerText="과거역방향-11";
                } else if (num[0]==12){
                    document.getElementById("textSpace1").innerText="과거역방향-12";
                } else if (num[0]==13){
                    document.getElementById("textSpace1").innerText="과거역방향-13";
                } else if (num[0]==14){
                    document.getElementById("textSpace1").innerText="과거역방향-14";
                } else if (num[0]==15){
                    document.getElementById("textSpace1").innerText="과거역방향-15";
                } else if (num[0]==16){
                    document.getElementById("textSpace1").innerText="과거역방향-16";
                } else if (num[0]==17){
                    document.getElementById("textSpace1").innerText="과거역방향-17";
                } else if (num[0]==18){
                    document.getElementById("textSpace1").innerText="과거역방향-18";
                } else if (num[0]==19){
                    document.getElementById("textSpace1").innerText="과거역방향-19";
                } else if (num[0]==20){
                    document.getElementById("textSpace1").innerText="과거역방향-20";
                } else {
                    document.getElementById("textSpace1").innerText="과거역방향-21";
                }
            }
            
           
        }
       

    
        document.getElementById("layout1").onclick = function() {
            document.getElementById("pick2").src="img/"+num[1]+".png";
            boolPast = false
      
            if(ForR2==0){
                if (num[1]==0){
                    document.getElementById("textSpace2").innerText="현재-1";
                } else if (num[1]==1){
                    document.getElementById("textSpace2").innerText="현재-1";
                } else if (num[1]==2){
                    document.getElementById("textSpace2").innerText="현재-2";
                } else if (num[1]==3){
                    document.getElementById("textSpace2").innerText="현재-3";
                } else if (num[1]==4){
                    document.getElementById("textSpace2").innerText="현재-4";
                } else if (num[1]==5){
                    document.getElementById("textSpace2").innerText="현재-5";
                } else if (num[1]==6){
                    document.getElementById("textSpace2").innerText="현재-6";
                } else if (num[1]==7){
                    document.getElementById("textSpace2").innerText="현재-7";
                } else if (num[1]==8){
                    document.getElementById("textSpace2").innerText="현재-8";
                } else if (num[1]==9){
                    document.getElementById("textSpace2").innerText="현재-9";
                } else if (num[1]==10){
                    document.getElementById("textSpace2").innerText="현재-10";
                } else if (num[1]==11){
                    document.getElementById("textSpace2").innerText="현재-11";
                } else if (num[1]==12){
                    document.getElementById("textSpace2").innerText="현재-12";
                } else if (num[1]==13){
                    document.getElementById("textSpace2").innerText="현재-13";
                } else if (num[1]==14){
                    document.getElementById("textSpace2").innerText="현재-14";
                } else if (num[1]==15){
                    document.getElementById("textSpace2").innerText="현재-15";
                } else if (num[1]==16){
                    document.getElementById("textSpace2").innerText="현재-16";
                } else if (num[1]==17){
                    document.getElementById("textSpace2").innerText="현재-17";
                } else if (num[1]==18){
                    document.getElementById("textSpace2").innerText="현재-18";
                } else if (num[1]==19){
                    document.getElementById("textSpace2").innerText="현재-19";
                } else if (num[1]==20){
                    document.getElementById("textSpace2").innerText="현재-20";
                } else {
                    document.getElementById("textSpace2").innerText="현재-21";
                }
            } else {
                this.style.transform="rotate(180deg)";
                if (num[1]==0){
                    document.getElementById("textSpace2").innerText="현재역방향-0";
                } else if (num[1]==1){
                    document.getElementById("textSpace2").innerText="현재역방향-1";
                } else if (num[1]==2){
                    document.getElementById("textSpace2").innerText="현재역방향-2";
                } else if (num[1]==3){
                    document.getElementById("textSpace2").innerText="현재역방향-3";
                } else if (num[1]==4){
                    document.getElementById("textSpace2").innerText="현재역방향-4";
                } else if (num[1]==5){
                    document.getElementById("textSpace2").innerText="현재역방향-5";
                } else if (num[1]==6){
                    document.getElementById("textSpace2").innerText="현재역방향-6";
                } else if (num[1]==7){
                    document.getElementById("textSpace2").innerText="현재역방향-7";
                } else if (num[1]==8){
                    document.getElementById("textSpace2").innerText="현재역방향-8";
                } else if (num[1]==9){
                    document.getElementById("textSpace2").innerText="현재역방향-9";
                } else if (num[1]==10){
                    document.getElementById("textSpace2").innerText="현재역방향-10";
                } else if (num[1]==11){
                    document.getElementById("textSpace2").innerText="현재역방향-11";
                } else if (num[1]==12){
                    document.getElementById("textSpace2").innerText="현재역방향-12";
                } else if (num[1]==13){
                    document.getElementById("textSpace2").innerText="현재역방향-13";
                } else if (num[1]==14){
                    document.getElementById("textSpace2").innerText="현재역방향-14";
                } else if (num[1]==15){
                    document.getElementById("textSpace2").innerText="현재역방향-15";
                } else if (num[1]==16){
                    document.getElementById("textSpace2").innerText="현재역방향-16";
                } else if (num[1]==17){
                    document.getElementById("textSpace2").innerText="현재역방향-17";
                } else if (num[1]==18){
                    document.getElementById("textSpace2").innerText="현재역방향-18";
                } else if (num[1]==19){
                    document.getElementById("textSpace2").innerText="현재역방향-19";
                } else if (num[1]==20){
                    document.getElementById("textSpace2").innerText="현재역방향-20";
                } else {
                    document.getElementById("textSpace2").innerText="현재역방향-21";
                }
            }
            
           
        }

        document.getElementById("layout2").onclick = function() {
            document.getElementById("pick3").src="img/"+num[2]+".png";
            boolPast = false
          
            if(ForR3==0){
                if (num[2]==0){
                    document.getElementById("textSpace3").innerText="미래-0";
                } else if (num[2]==1){
                    document.getElementById("textSpace3").innerText="미래-1";
                } else if (num[2]==2){
                    document.getElementById("textSpace3").innerText="미래-2";
                } else if (num[2]==3){
                    document.getElementById("textSpace3").innerText="미래-3";
                } else if (num[2]==4){
                    document.getElementById("textSpace3").innerText="미래-4";
                } else if (num[2]==5){
                    document.getElementById("textSpace3").innerText="미래-5";
                } else if (num[2]==6){
                    document.getElementById("textSpace3").innerText="미래-6";
                } else if (num[2]==7){
                    document.getElementById("textSpace3").innerText="미래-7";
                } else if (num[2]==8){
                    document.getElementById("textSpace3").innerText="미래-8";
                } else if (num[2]==9){
                    document.getElementById("textSpace3").innerText="미래-9";
                } else if (num[2]==10){
                    document.getElementById("textSpace3").innerText="미래-10";
                } else if (num[2]==11){
                    document.getElementById("textSpace3").innerText="미래-11";
                } else if (num[2]==12){
                    document.getElementById("textSpace3").innerText="미래-12";
                } else if (num[2]==13){
                    document.getElementById("textSpace3").innerText="미래-13";
                } else if (num[2]==14){
                    document.getElementById("textSpace3").innerText="미래-14";
                } else if (num[2]==15){
                    document.getElementById("textSpace3").innerText="미래-15";
                } else if (num[2]==16){
                    document.getElementById("textSpace3").innerText="미래-16";
                } else if (num[2]==17){
                    document.getElementById("textSpace3").innerText="미래-17";
                } else if (num[2]==18){
                    document.getElementById("textSpace3").innerText="미래-18";
                } else if (num[2]==19){
                    document.getElementById("textSpace3").innerText="미래-19";
                } else if (num[2]==20){
                    document.getElementById("textSpace3").innerText="미래-20";
                } else {
                    document.getElementById("textSpace3").innerText="미래-21";
                }
            } else {
                this.style.transform="rotate(180deg)";
                if (num[2]==0){
                    document.getElementById("textSpace3").innerText="미래역방향-0";
                } else if (num[2]==1){
                    document.getElementById("textSpace3").innerText="미래역방향-21";
                } else if (num[2]==2){
                    document.getElementById("textSpace3").innerText="미래역방향-2";
                } else if (num[2]==3){
                    document.getElementById("textSpace3").innerText="미래역방향-3";
                } else if (num[2]==4){
                    document.getElementById("textSpace3").innerText="미래역방향-4";
                } else if (num[2]==5){
                    document.getElementById("textSpace3").innerText="미래역방향-5";
                } else if (num[2]==6){
                    document.getElementById("textSpace3").innerText="미래역방향-6";
                } else if (num[2]==7){
                    document.getElementById("textSpace3").innerText="미래역방향-7";
                } else if (num[2]==8){
                    document.getElementById("textSpace3").innerText="미래역방향-8";
                } else if (num[2]==9){
                    document.getElementById("textSpace3").innerText="미래역방향-9";
                } else if (num[2]==10){
                    document.getElementById("textSpace3").innerText="미래역방향-10";
                } else if (num[2]==12){
                    document.getElementById("textSpace3").innerText="미래역방향-12";
                } else if (num[2]==12){
                    document.getElementById("textSpace3").innerText="미래역방향-12";
                } else if (num[2]==13){
                    document.getElementById("textSpace3").innerText="미래역방향-13";
                } else if (num[2]==14){
                    document.getElementById("textSpace3").innerText="미래역방향-14";
                } else if (num[2]==15){
                    document.getElementById("textSpace3").innerText="미래역방향-15";
                } else if (num[2]==16){
                    document.getElementById("textSpace3").innerText="미래역방향-16";
                } else if (num[2]==17){
                    document.getElementById("textSpace3").innerText="미래역방향-17";
                } else if (num[2]==18){
                    document.getElementById("textSpace3").innerText="미래역방향-18";
                } else if (num[2]==19){
                    document.getElementById("textSpace3").innerText="미래역방향-19";
                } else if (num[2]==20){
                    document.getElementById("textSpace3").innerText="미래역방향-20";
                } else {
                    document.getElementById("textSpace3").innerText="미래역방향-21";
                }
            }
        }

    }
    
}
 
