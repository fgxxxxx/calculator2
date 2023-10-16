function $(id){return document.getElementById(id);}
var str;
var result;
var laststr;
var lastresult;
function display(str0)	//display to text
{
    str = document.getElementById("text");
    str.value = str.value + str0;
}
function back()		//back
{
    str = document.getElementById("text");
    str.value = str.value.substring(0,str.value.length-1);
}
function reset()	//clear
{
    str = document.getElementById("text");
    str.value = "";
}

function sin() {
    str = document.getElementById("text");
    str.value = Math.sin(str.value*(Math.PI / 180));
}
function asin() {
    str = document.getElementById("text");
    str.value = Math.asin(str.value )/(Math.PI / 180);
}
function cos() {
    str = document.getElementById("text");
    str.value = Math.cos(str.value*(Math.PI / 180));
}
function acos() {
    str = document.getElementById("text");
    str.value = Math.acos(str.value )/(Math.PI / 180);
}
function tan() {
    str = document.getElementById("text");
    str.value = Math.tan(str.value*(Math.PI / 180));
}
function atan() {
    str = document.getElementById("text");
    str.value = Math.atan(str.value )/(Math.PI / 180);
}

function ans()
{
    laststr = document.getElementById("text");
    display("ans");
    laststr.value = lastresult;
}
function equals()	//equal to
{
    str = document.getElementById("text");
    result = eval(str.value);
    str.value = result;
    laststr = str;
    lastresult = result;
}
