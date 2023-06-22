from flask import Flask, render_template, request, jsonify, make_response
import mysql.connector
from mysql.connector import errorcode
from flask_cors import CORS
from src.bang import *
from src.sachick import *
from src.EnglishWord import *

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
        return False, False
    else:
        cursor = conn.cursor()
        return conn, cursor

app = Flask(__name__)
CORS(app)
@app.route('/')
def index():
    return "Hello, World!"

def build_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/login', methods=['POST'])
def login():
    conn, cursor = set_mysql()
    if conn == False:
        exit(0)
    if request.method == 'POST':
        cursor.execute("SELECT * FROM login_data;")
        data = request.get_json()
        id_value = data.get('id')
        pw_value = data.get('pw')
        print(id_value, pw_value)

        for (no, id, pw) in cursor:
            if id_value == id and pw_value == pw:
                return build_actual_response(jsonify({'message': 'true'}))
        return build_actual_response(jsonify({'message': 'false'}))
    else:
        return build_actual_response(jsonify({'message': 'false'}))


@app.route('/bang', methods=['POST', 'GET'])
def bang():
    bang_arr = []
    while True:
        if len(bang_arr) == 10:
            break
        dap, moon = randx()
        if has_decimal(dap):
            result = decimal_to_fraction(dap)
            if len(str(result)) > 6:
                continue
            bang_arr.append({'problem': moon, 'answer': f"{result.numerator}/{result.denominator}"})
        else:   
            bang_arr.append({'problem': moon, 'answer': str(int(dap))})
    return build_actual_response(jsonify(bang_arr))

@app.route('/sachick', methods=['POST', 'GET'])
def sachick():
    sachick_arr = []
    data = request.get_json()
    degree = int(data.get('degree'))
    while True:
        if len(sachick_arr) == 10:
            break
        p, d = randnum(degree)
        if has_decimal(d):
            result = decimal_to_fraction(d)
            if len(str(result)) > 6:
                continue

            sachick_arr.append({'problem': p, 'answer': f"{result.numerator}/{result.denominator}"})
        else:   
            sachick_arr.append({'problem': p, 'answer': str(int(d))})
    return build_actual_response(jsonify(sachick_arr))

@app.route('/EnglishWord', methods=['POST', 'GET'])
def EnglishWord():
    data = request.get_json()
    first, last, HowMany = int(data.get('first')), int(data.get('last')), int(data.get('HowMany'))
    if HowMany > (last - first + 1) * 10:
        return build_actual_response(jsonify({'message': 'false'}))
    file_data = read_file("./dir/Word Master 초등 베이직.xlsx")
    return_list = print_question(first, last, HowMany, file_data)
    return build_actual_response(jsonify(return_list))

if __name__ == '__main__':
    app.run()
