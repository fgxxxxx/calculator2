# calculator2
[TOC](Catalogue)
# Personal information
|The Link My Class | https://bbs.csdn.net/forums/ssynkqtd-04 |
| ----------------- |--------------- |
| The Link of Requirement of This Assignment | https://bbs.csdn.net/topics/617378696 |
| The Aim of This Assignment | Create a backened and frontend separation calculator to realize the functions and database and write a blog to record your work content and process. |
| MU STU ID and FZU STU ID | 21125929_832102204 |
| The Link of Code of this assignment of GitHub |https://github.com/fgxxxxx/calculator2|
# 1. Assignment Description
In the last assignment, we have completed the most basic design of a calculator function, so now continue to achieve more perfect calculator function. Because we understand that everyone basically has a certain programming foundation, this assignment allows the use of any visualization technology: web, Android, applet of WeChat, etc., but to reflect the frontend and backend separation to achieve the following functions.

## 1. Basic calculator functions
Function 1: addition, subtraction, multiplication, division, remainder
 - Basic +, -, *, /, %，operations, requiring the correct order of operations, the correct result, and store the input string and the result in a back-end database

Function 2: Read history

 - Can use the ans button to return the previous calculation result and view the history to read the last ten string formula and the corresponding calculation result, must be read from the back-end database, cannot use the cache.
## 2. Extended function: Scientific calculator
 - Calculate radical sign, trigonometric function, log, scientific notation.
 - Implement bracket computation.
 - Better looking UI interface.
# 2. Personal Software Process (PSP) Form
| **Personal Software Process Stages**    | Estimated Time（/minutes） | Actual Time（/minutes） |
| :-------------------------------------- | :------------------------ | :--------------------- |
| •Planning                                |             60             |            45            |
| • Estimate                              |              30            |               15         |
| •Development                         |              40             |                30        |
| • Analysis                              |                30           |            30            |
| • Design Specification                           |      20                     |             20           |
| • Design Review                         |              15             |               10         |
| • Coding Standard                       |             10              |             10          |
| • Design                                |               120            |               100         |
| • Coding                                |                 180          |              150        |
| • Code Review                           |                45           |             60           |
| • Test                                  |             45              |           20             |
| • Reporting                               |             120              |           100             |
| • Test Report                            |                60           |             40           |
| • Size Measurement                      |             20              |          10              |
| • Postmortem & Process Improvement Plan |            100               |           20             |
| **Sum**                                 |              895             |           660             |

# 3. Problem-solving Ideas
 In this assignment, we are asked to make **a simple web calculator** and **separate the fronted and backend programming**. This assignment needs to design the front end of the calculator to visualize it also use backend database to store the history data. After consulting relevant articles, I found that ***Hyper Text Markup Language (HTML), Cascading Style Sheets (CSS), Java Script (JS)*** are all separate languages, but they form the basis of the front-end technology. And I use PyCharm and MySQL to realize the database. Finally, I make a connection port with them.

 - ***HTML***:  a language used to describe the web page, responsible for the architecture of the web page

 - ***CSS***: a language used to lay out color, text content of the web page, responsible for the style of the web page, beautification

 - ***JS***: a language that runs on the client side and is responsible for the behavior of web pages.

 - ***jQuery***: a js library that can be added to a web page with a simple line of tags, and we can use ajax in it for front and back access
 
 - ***MySQL***: MySQL is the most popular Relational Database Management System, and it is one of the best Relational Database Management System application software in WEB applications.

 - ***Python***: Python is a high-level scripting language that combines interpretive, compliable, interactive, and object-oriented programming. Python is designed to be highly readable, often using English keywords compared to other languages, some punctuation in other languages, and it has a more characteristic syntax structure than other languages.

To sum up, the way to solve the problem is to use programming software (I used ***WebStorm, PyCharm and MySQL*** in this assignment) to realize the backend and frontend calculator.
# 4. Design and Implementation Process
## Design Process
 A simple calculator should contain numbers, operators and function keys.

***Numbers***: ***integers from 0 to 9***
***Operators***: the basic four operations **addition, subtraction, multiplication and division**
***Function***: empty, backspace, parentheses, equal functions. On the basis of realizing these functions, **trigonometric function and inverse trigonometric function** as well as **mod to get remainder** are performed on the results. We also have a history key to get the data from backend database and ans key to return the last result.
## Implementation Process
1. The interface only needs to fix the width and height of the calculator panel and the width and height of the button. Then select text styles and page colors to beautify it.
2. If a number (0,1,2,3,4,5,6,7,8,9) and "(", ")", "." is clicked, it will be displayed in the input text box above (hereinafter referred to as the output box) and append (+=) in a string content.
3. If an operator button (+, -, *, /, ^, √, sin, cos, tan, arcsine, arccosine, arctan) is clicked, it will perform related operations and output results.
4. If "C" is clicked, the string content is cleared, and the output box is also cleared.
5. If "←" is clicked, clear the content string with the last character and set the output box to the value of content.
6. If you click "=", the result of the calculation is displayed in the output box and the content is cleared.
7. Using the eval () function, this function can execute the java scripts statement in it, and return the result if it can be executed, or directly return the original statement if it cannot be executed.
8. If you click "ans", it will return the last calculation result and if you click "history", it will get the history data from database.


# 5. Code Description
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
## Calculator_Backend

```python

from flask import Flask,render_template,request
import pymysql

app = Flask(__name__)

@app.route("/add/user", methods=["GET","POST"])
def add_user():
    if request.method == "GET":
        return render_template("add_user.html")
    calculation = request.form.get("calculation")
    result = request.form.get("result")

    conn = pymysql.connect(host="127.0.0.1", port=3306, user='root', password="Asd12345.", charset='utf8', db='history')
    cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)

    sql = "insert into history(calculation, result) values(%s,%s)"
    cursor.execute(sql, [calculation, result])
    conn.commit()

    cursor.close()
    conn.close()
    return render_template("add_user.html")

@app.route("/show/user")
def show_user():
    conn = pymysql.connect(host="127.0.0.1", port=3306, user='root', password="Asd12345.", charset='utf8', db='history')
    cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)
    sql = "select * from history"
    cursor.execute(sql)
    data_list = cursor.fetchall()

    cursor.close()
    conn.close()

    print(data_list)

    return render_template("show_user.html",data_list=data_list)

if __name__ == '__main__':
    app.run()
```
This is a block of python code that using MySQL to create interfaces to let the front and back ends of the alley.

 - ***add_user***: send GET request, return page, enter and POST to the website.
 - ***show_user***: show the data in database.
- ***connecting_process***: First, we need to make a connection, then execute the command in MySQL, finally close the connection.
```python
	conn = pymysql.connect(host, port, user, password, charset='utf8', db)
    cursor = conn.cursor(cursor=pymysql.cursors.DictCursor)

    sql = "The command to execute"
    cursor.execute()

    cursor.close()
    conn.close()
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/1564e62b37174fada4cdb1de4097b8fc.jpeg)

# 6. Result Displaying and Text Description

[video(video-Go58IUiC-1697520714223)(type-csdn)(url-https://live.csdn.net/v/embed/335613)(image-https://video-community.csdnimg.cn/vod-84deb4/edf2fc806c1d71ee9e395017f1e80102/snapshots/dcdecc362c524b65adb3c386eea7f2ad-00005.jpg?auth_key=4851058671-0-0-b4d57601025b5e98eb4bc60e10afe007)(title-1697458093500)]

In the video above, we clicked each key and did related operations, we did separate operations, we did mixed operations, and all the results were correct. We also carried out mod, brackets, ans, trigonometric functions, inverse trigonometric functions, square and root operations on the result, and also got the correct result, the clear key and the return key were also correct. We also get the history data from the database.

![img](https://img-community.csdnimg.cn/images/2c477058842b45bf8f86297072867fdf.png "#left")

![img](https://img-community.csdnimg.cn/images/e8a00ae73a184d24963c53f4c82c5486.png "#left")

# 7. Summary
The goal of this project is to achieve a simple version of the web calculator, which needs to realize the visualization and related functions of the calculator, which uses HTML,CSS and JS to build and beautify the web page, HTML is responsible for the web structure, CSS is responsible for the layout and beautification, JS is responsible for the behavior of the web page, in the process of using WebStorm programming, I learned how to build and improve my own web front end. In the process of using GitHub to record my own code base and using CSDN to write my own blog to record the development, I learned how to fully prepare, design, summarize and review my own project. I also learned how to use backend separation to achieve the functions like read history. I learned the MySQL and use python to create connection to MySQL so that the frontend and backend can work together.
