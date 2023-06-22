import requests

url = "http://127.0.0.1:5000/login"

data = {
    'id':'guest',
    'pw':'guest'
}

res = requests.post(url, json=data, headers={'Content-Type':'application/json'})

print(res.text)