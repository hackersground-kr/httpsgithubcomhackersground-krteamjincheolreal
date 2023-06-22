import requests

url = "https://mysql-server.azurewebsites.net/login"

data = {
    'id':'guest',
    'pw':'guest'
}

res = requests.post(url, json=data, headers={'Content-Type':'application/json'})
print(res.text)