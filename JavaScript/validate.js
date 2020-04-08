window.addEventListener("load",init);
var username;
var email;
var pwd;
var spwd;
var cpwd;
var span;
function init()
{
    username = document.querySelector("#box1");
    span = document.querySelectorAll(".err");
    pwd = document.querySelector("#box3");
    username.addEventListener("blur",blankCheck);
    pwd.addEventListener("keyup",showPwd);
    spwd= document.querySelector("#box4");
    cpwd  = document.querySelector("#box5");
    cpwd.addEventListener("blur",Confirm);

    email = document.querySelector("#box2");
    email.addEventListener("keyup",validateEmail);

}


function blankCheck()
{
    var text = username.value;
    if(text.length == 0 || username.vslue=="" )
    {
        span[0].innerText = "please enter name here";
        username.style.border="2px solid red";
    }
    else
    {
        span[0].innerText ="";
        username.style.border="2px solid green";

    }
}

function showPwd()
{

   spwd.value = pwd.value;
}


function Confirm()
{
    span1 = document.querySelector(".confirm");
    if (pwd.value == cpwd.value)
    {
        span1.innerText ="password confirmed";
    }
    else{
        span1.innerText ="Password not matched";

    }
}

function validateEmail()
{
    var pattern =/([a-z | 0-9])\w+[@]\w+[.]\w+[com | in | org ]/;
    var str = email.value;
    var test = pattern.test(str);
    if(test)
    {
        span[1].innerText = "Valid";
    }
    else{
        span[1].innerText = "Not Valid";
    }
}