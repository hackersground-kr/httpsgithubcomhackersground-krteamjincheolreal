from flask import Flask, render_template, request
import mysql.connector
from mysql.connector import errorcode

# Obtain connection string information from the portal


def set_mysql():
    config = {
        'host':'barahana.mysql.database.azure.com',
        'user':'barahana',
        'password':'qwer1234!@#$',
        'database':'user_data',
        'client_flags': [mysql.connector.ClientFlag.SSL],
        'ssl_ca': './DigiCertGlobalRootG2.crt.pem'
    }
    try:
        conn = mysql.connector.connect(**config)
        print("Connection established")
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with the user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
        return False
    else:
        cursor = conn.cursor()
        return conn, cursor
def select_mysql(conn, cursor, query):
    cursor.execute(query)
    return cursor
    # conn.commit()
    # cursor.close()
    # conn.close()
    # print("Done.")
conn, cursor = set_mysql()

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        cursor = select_mysql(conn, cursor, "SELECT * FROM login_data;")
        post_id = request.form['id']
        post_pw = request.form['pw']
        for (no, id, pw) in cursor:
            if post_id == id and post_pw == pw:
                return True
        return False
    else:
        return False
    


if __name__ == '__main__':
    app.run(debug=True)