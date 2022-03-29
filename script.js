
var number1=prompt("type the first number");
var number2=prompt("type the second number");

//var Mathoperations=prompt("What operations do you want to do")
var Mathoperations;
do{

    Mathoperations=prompt("What operations do you want to do");

}while(Mathoperations !=="subtraction" && Mathoperations !=="addition" && Mathoperations !=="multiplication" && Mathoperations !=="division");

//document.write(Mathoperations);

if (Mathoperations=="addition"){

    function addition(n1,n2){

                return n1+n2
           
    }

var x=(Number(number1));
var y=(Number(number2));


document.write("<br>");
var totaladd=addition(x,y);
document.write("<p>");
document.write("The result of "+ x +" + " + y + " is " + totaladd);
document.write("</p>");
}
else if  (Mathoperations=="subtraction"){

    function subtraction(n1,n2){

                return n1-n2
           
    }

var x1=(Number(number1));
var y1=(Number(number2));


document.write("<br>");
totalsub=subtraction(x1,y1);
document.write("<p>");
document.write("The result of "+ x1 +" - " + y1 + " is " + totalsub);
document.write("</p>");
}
////
else if  (Mathoperations=="multiplication"){

    function Multiplication(n1,n2){

                return n1*n2
           
    }

var xMult=(Number(number1));
var yMult=(Number(number2));


document.write("<br>");
totalMult=Multiplication(xMult,yMult);
document.write("<p>");
document.write("The result of "+ xMult +" * " + yMult + " is " + totalMult);
document.write("</p>");
}

else if  (Mathoperations=="division"){

    function division(n1,n2){

                return n1/n2
           
    }

var xDiv=(Number(number1));
var yDiv=(Number(number2));


document.write("<br>");
totaldiv=division(xDiv,yDiv);
document.write("<p>");
document.write("The result of "+ xDiv +" * " + yDiv + " is " + totaldiv);
document.write("</p>");
}






/*
function addition(n1,n2){

    //var result=n1+n2
    return n1+n2
    //return result

}


var x=(Number(number1));

document.write("el valor del primer numero es  " + x );
document.write("<br>");

var y=(Number(number2));

document.write("<br>");

document.write("el valor del segundo numero es  " + y);
document.write("<br>");
total=addition(x,y);
document.write("<br>");
document.write("El resultado es " total);*/