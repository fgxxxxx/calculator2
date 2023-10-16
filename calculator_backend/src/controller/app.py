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