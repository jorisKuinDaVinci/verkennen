import requests

APP_ID = 'a352db877902bafba7d0ed23e7660331'
url = 'https://api.openweathermap.org/data/2.5/weather?q=Dordrecht&units=metric&appid=' + APP_ID
response = requests.get(url)

# omzetten naar Json
json_response = response.json()
print(type(json_response))
print(json_response)

# Toon een weerbericht in de terminal (als output), gebruik hier de response voor
# Bijv.: 'In Dordrecht: Clear, de temperatuur is 15 graden Celsius.'

weer = json_response['weather'][0]['description']
temp = json_response['main']['temp']
stad = json_response['name']

print(f'In {stad}: {weer}, de temperatuur is {temp} graden Celsius.')