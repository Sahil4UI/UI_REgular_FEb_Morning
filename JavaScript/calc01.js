window.addEventListener("load",init);
var num1,num2;
function init()
{

 num1 = document.querySelector("#f_num");
 num2 = document.querySelector("#s_num");

document.querySelector("#add").addEventListener("click",Add);

document.querySelector("#sub").addEventListener("click",Sub);

document.querySelector("#div").addEventListener("click",div);

document.querySelector("#mul").addEventListener("click",mul);

}
function Add()
{
    var result = parseInt(num1.value) + parseInt(num2.value);
    document.querySelector("#result").innerHTML = result;
}

function Sub()
{
    var result = parseInt(num1.value) - parseInt(num2.value);
    document.querySelector("#result").innerHTML = result;
}

function div()
{
    var result = parseInt(num1.value) / parseInt(num2.value);
    document.querySelector("#result").innerHTML = result;
}

function mul()
{
    var result = parseInt(num1.value) * parseInt(num2.value);
    document.querySelector("#result").innerHTML = result;
}