window.addEventListener("load",init);
var n1 = '';
var flag = false;
function init()
{
    numbers = document.querySelectorAll(".num");
    operators = document.querySelectorAll(".opr");

    for (var i=0; i < numbers.length;i++)
    {
        numbers[i].addEventListener("click",appendNumbers);
    }

    for (var i=0; i < operators.length;i++)
    {
        operators[i].addEventListener("click",appendoperators);
    }
    document.getElementById("equals").addEventListener("click",calc);
    document.querySelector(".clear").addEventListener("click",clear);

}

function appendNumbers()
{
    var num = event.srcElement.innerText;
    n1 += num;
    console.log(num);
    document.querySelector("#result").value = n1;
    flag=false;
}
function appendoperators()
{



    var opr = event.srcElement.innerText;
    if (!flag == true)
    {
        n1+=opr;
        flag=true;
    }
    else{
        n1 = n1.slice(0,n1.length-1);
        n1 += opr;
    }
    document.querySelector("#result").value = n1;

}
function calc()
{   
    
    var result = eval(n1);
    document.querySelector("#result").value = result ;
}

function clear()
{
    n1="";
    document.querySelector("#result").value = "" ;

}