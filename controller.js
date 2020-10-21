const moment = require('moment');

async function stringToHash(string) {           
    var hash = 0; 
    if (string.length == 0) return hash; 
    for (i = 0; i < string.length; i++) { 
        char = string.charCodeAt(i); 
        hash = ((hash >> 5) - hash) + char; 
        hash = hash & hash; 
    } 
    return hash; 
} 
  

async function createURL(url, time) {
    const date =  moment(new Date()).valueOf();
    const hashId = await stringToHash(url);
    const link = `https://kranthi.com/${hashId}`;
    return { url, link, date, time, hashId};
}

async function getURL(obj) {
    const date =  moment(new Date()).valueOf();
    if(obj.date + obj.time * 1000  >= date){
        return { link: obj.link };
    } else return { link: 'Link has expired' };
}

  exports.createURL = createURL;
  exports.getURL = getURL;

