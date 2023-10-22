## Calculator_Frontend
***HTML***
```html
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset="utf-8"/>
    <title>Calculator</title>
    <link href="./style.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="./cal.js"></script>
    <script type="text/javascript" src="js/jquery-3.5.0.js"></script>
    <script>
//Called when the web page is loaded
$(function () {
  //Provides the click method for the button with id=history
  $("#history").click(function () {
    //request ajax to send
    $.ajax({
      url: 'http://127.0.0.1:5000/show/user',
      type: "get",
      dataType: "json"
    })
      //Access success
      .done(function (msg) {
        //Clear data other than the first row (header) of the table with id=data
        $("#data tr:not(:first)").empty();
        //Iterate over the returned json array
        $.each(msg, function (index, user) {
          //Adds the contents of each element of the json array to the table
          $("#data").append("<tr>" +
            "<td>" + user.calculation + "</td>" +
            "<td>" + user.result + "</td>" + "</tr>")
        })
      })
      //Access failure
      .fail(function () {
        alert("ERROR!")
      })
  })
})
    </script>
</head>
<body>
<div id="calculator">
    <div id="head"><h3>gxCalculator</h3></div>
    <div id="show" align="center">
        <input type="text" id="text" >
    </div>
    <div id="fgx">
        <table align="center">
            <tr>
                <td><input type="button" value="7" onclick="display(7)"></td>
                <td><input type="button" value="8" onclick="display(8)"></td>
                <td><input type="button" value="9" onclick="display(9)"></td>
                <td><input type="button" value="+" onclick="display('+')"></td>
                <td><input type="button" value="-" onclick="display('-')"></td>
                <td><input type="button" value="sin" onclick="sin()"></td>
                <td><input type="button" value="asin" onclick="asin()"></td>
                <td><input type="button" value="√" onclick="sqrt()"></td>
            </tr>
            <tr>
                <td><input type="button" value="4" onclick="display(4)"></td>
                <td><input type="button" value="5" onclick="display(5)"></td>
                <td><input type="button" value="6" onclick="display(6)"></td>
                <td><input type="button" value="*" onclick="display('*')"></td>
                <td><input type="button" value="/" onclick="display('/')"></td>
                <td><input type="button" value="cos" onclick="cos('cos(')"></td>
                <td><input type="button" value="acos" onclick="acos('acos(')"></td>
                <td><input type="button" value="log" onclick="log()"></td>
            </tr>
            <tr>
                <td><input type="button" value="1" onclick="display(1)"></td>
                <td><input type="button" value="2" onclick="display(2)"></td>
                <td><input type="button" value="3" onclick="display(3)"></td>
                <td><input type="button" value="(" onclick="display('(')"></td>
                <td><input type="button" value=")" onclick="display(')')"></td>
                <td><input type="button" value="tan" onclick="tan()"></td>
                <td><input type="button" value="atan" onclick="atan()"></td>
                <td><input type="button" value="e" onclick="exponential()"></td>
            </tr>
            <tr>
                <td><input type="button" value="." onclick="display('.')"></td>
                <td><input type="button" value="0" onclick="display(0)"></td>
                <td><input type="button" value="π" onclick="pi()"></td>
                <td><input type="button" value="←" onclick="back()"></td>
                <td><input type="button" value="c" onclick="reset()"></td>
                <td><input type="button" value="%" onclick="display('%')"></td>
                <td><input type="button" value="ans" onclick="ans()"></td>
                <td><input type="button" value="=" onclick="equals()"></td>
            </tr>
            </table>
        <form method="post" action="/add/user">
        <input type="button" value="history" onclick='location.href=("http://127.0.0.1:5000/show/user")'>
        </form>
            </div>
        </div>
    </body>
</html>

```
HTML is used to build web pages, and integrate CSS, JS to achieve the overall function of the web page.
- ***< !DOCTYPE html >***: This element is used to associate HTML authoring specifications for features such as automatic debugging.
- ***< html >< /html >***: This element contains all the content of the entire page and is sometimes called the root element. It also contains the lang attribute, which specifies the main language of the page.
- ***< head >< /head >***: All the members of the page that you add to the page and don't show to the viewer use this element as a container. These include things like keywords and page descriptions for search engines, CSS for stylizing pages, character set declarations, and so on.
- ***< body >< /body >***: This element contains all the content you expect the user to see when they visit the page, including text, images, videos, games, playable audio tracks, or other content.
- ***< div >< /div >***: As a "pure" container, the <div> element does not semantically represent any particular type of content. However, it can group content so that it can be conveniently formatted using the class or id attribute, or it can be divided within a document to mark content written in another language (using the lang attribute), and so on.
- ***< table >< /table >***: Represents tabular data - that is, information presented in a two-dimensional table consisting of rows and columns containing data.
- ***< td >< /td >***：The <td> HTML element defines a cell of a table that contains data. It participates in the table model.
- ***< tr >< /tr >***：The <tr> HTML element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements.
- ***< input type="button" >***: <input> elements of type button are rendered as simple push buttons, which can be programmed to control custom functionality anywhere on a webpage as required when assigned an event handler function (typically for the click event). We use the button to set its relevant properties such as color, size, etc., and perform the relevant operations when the button is clicked.

In this section, we have also imported jQuery and utilized Ajax, which is a technology for exchanging data with the server and updating some web pages without reloading the entire page.Create a loadDataAjax.js script in the js directory. The script will assign a click method to the history button after the page has loaded, and after clicking it will send an ajax request to get the data and add it to the table.
- ***$(function(){pass})***: The body of the function is called automatically when the web page is loaded
- ***$("#id").click(function(){pass})***: listens for the button corresponding to the id and provides the click method
- ***$.ajax()***: ajax request
Parameters for ajax requests:
- ***url***: Request address
- ***type***: Specifies the request type (get/post)
- ***dataType***: specifies the data type to be returned
- ***.done***: Accesses the successfully called method where the msg parameter is the data returned by the resp
- ***.fail***: Access failed to call the method
***CSS***

```css
body{
    //
    background: rgba(0, 65, 253, 0.14);
    border: 1px solid rgba(0, 65, 253, 0.14);
    box-shadow: 2px 2px 2px rgba(0, 65, 253, 0.14);
}
h3{
    font-size: 35px;
    text-align: center;
}
#show input{
    width:822px;
    height:60px;
    font-size:30px;
    border: 1px solid rgba(0, 65, 253, 0.14);
    box-shadow: 3px 3px 3px rgb(0, 104, 253);
    background: rgba(0, 65, 253, 0.14);
}
#fgx input{
    width: 100px;
    height: 70px;
    font-size: 28px;
    box-shadow: 3px 3px 3px rgb(0, 104, 253);
}
#fgx input:hover{
    background: lightgray;
}
```
This is a block of CSS code that adjust page layout, form, and color. We use it to beautify the web page.
 - ***body***: In body we set the size and color of background, border and box-shadow respectively.
 - ***h3***: In h3 we set all h3 elements' font-size and text-align.
 - ***#show input***: This targets id="show" element's input element and set the property of it. 
 -  ***#fgx input***: This targets id="fgx" element's input element and set the property of it. 
 - ***#fgx input : hover***: This targets id="fgx" element's input element and when the buttons are hovered over, we set the color of button. 
 
***JS***

```javascript
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
function sqrt() {
    str = document.getElementById("text");
    result = Math.sqrt(eval(str.value));
    str.value = result;
}

function log() {
    str = document.getElementById("text");
    result = Math.log10(eval(str.value));
    str.value = result;
}

function exponential() {
    str = document.getElementById("text").value;
    document.getElementById("text").value += Math.E;
}

function pi() {
    str = document.getElementById("text").value;
    document.getElementById("text").value = Math.PI;
}
```
This is a block of JS code that implements web behavior. We use JS to get the result after calculation.

 - ***function $ (id)***  : This function nested a function, getElementById (), which returns an element matching a specific ID. Since element ids are required to be unique in most cases, this function is a natural and efficient way to find specific elements.
- ***function display (str)***: This function is used to input the clicked character into the output box and update the string. For example, if we input 1, the output box will show 1, and if we input 2, the output box will show 12.
 - ***function equals ( )***: This function nested a function, eval (), it will evaluate the string str as a valid expression and returns the result, so when we click the button "=", we will get the final calculation results.
- ***function back ( )***: This function nested a function, substring (0, p), it will intercept the string to remove the last character, so when we click the button "←", we will remove the last string.
 - ***function reset ( )***: This function is used to empty the string, we directly make the string empty to implement this function, so when we click the button "C", we can reset the result.
 - ***function sin ( )***: This function is used to get the sine of input, for example, if we input 30, we will get 0.5. The function cos( ) and tan() work the same way as this function. But the value returned by the trigonometric function is in radians, so we need to convert the radians and the Angle values to get the correct result.
 - ***function asin ( )***: This function is used to get the arcsine of input, for example, if we input 0.5, we will get 30. The function acos( ) and atan() work the same way as this function.
 - ***function ans()***: This function returns the last result so that we can calculate for next time.
 -![](https://img-blog.csdnimg.cn/ee36325de97240e3b62ef7303d296b6b.png#pic_center)
