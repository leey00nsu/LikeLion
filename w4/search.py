import requests
from bs4 import BeautifulSoup 

url = "https://www.naver.com"

response = requests.get(url)

soup = BeautifulSoup(response.text,'html.parser')

file = open("crawl.html",'w',encoding="UTF-8")
file.write(response.text)
file.close

print(soup.title)
print(soup.title.string)
print(soup.span)