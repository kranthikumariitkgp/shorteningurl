# shorteningurl

Steps: 

1. from mongo.txt, execute commands in mongo shell.

2. enter mongo credentials in default.json

3.  do npm i

4. do npm start

Service is started.

APIs:

1. POST - http://localhost:9001/createTinyUrl
Body: {
	"longUrl": "https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp-kranthi-sadvdvsdvfgffsdv",
	"timeToLive": 6000
}
Note: time to live is in seconds.

Response: 

{
    "url": "https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp-kranthi-sadvdvsdvfgffsdv",
    "link": "https://kranthi.com/35",
    "date": 1603303336956,
    "time": 6000,
    "hashId": 35,
    "_id": "5f9077a8bec669a6e19e1a19"
}
url - is main url provided in req body
link - tiny url link
date - created time in millis
time - TTL time in seconds
hashId - is unique id created by hashing algo.
_id - mongo db primary key

2. GET - http://localhost:9001/getTinyUrl?id={id}

id - We need to pass from api 1

Response:
success -
{
    "link": "https://kranthi.com/35"
}
error -
{
    "link": "Link has expired"
}

