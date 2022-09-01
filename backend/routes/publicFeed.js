var express = require('express');
var router = express.Router();

const { create } = require('apisauce');

const flickerAPi = create({
  baseURL: "https://api.flickr.com"
});

const endpoint = "/services/feeds/photos_public.gne?format=json";

const processData = (data, itemPage) => {
  //delete 'jsonFlickrFeed(' & ')' from the response
  data = data.substring(15);
  data = data.substring(0, data.length - 1);

  data = JSON.parse(data);

  let feedData = [];

  let i = 0;
  for(let x of data.items){
    //initialize json object
    let jsonData = {};

    //organize data
    jsonData['title'] = x.title;
    jsonData['sourceLink'] = x.link;

    //convert medium size image to original size by delete '_m'
    let photo = x.media.m;
    photo = photo.replace("_m.", ".");
    jsonData['photo'] = photo;

    jsonData['published'] = x.published;
    
    //get author name
    let author = x.author;
    author = author.split(`"`);
    jsonData['author'] = author[1];

    jsonData['tags'] = x.tags;

    //push data to main feed data
    feedData.push(jsonData);

    //page break;
    i++;
    if(i > itemPage){
      break;
    }
  }

  return feedData;
}

const itemPages = (perPages) => {
  if(perPages == 'all'){
    return 20;
  }

  if(perPages > 20){
    return 20;
  }

  return perPages;
}
 
/* GET Public Feed listing. */
router.get('/:perPages', async function(req, res) {
  const perPages = req.params.perPages;
  const itemPage = itemPages(perPages);
  const response = await flickerAPi.get(endpoint);
  const data = response.data;

  const resProcess = processData(data, itemPage);
  
  res.json(resProcess);
});

router.get('/:tags/:perPages', async function(req, res) {
  const perPages = req.params.perPages;
  const itemPage = itemPages(perPages);
  const tags = req.params.tags;
  const response = await flickerAPi.get(endpoint + "&tags=" + tags);
  const data = response.data;

  const resProcess = processData(data, itemPage);
  
  res.json(resProcess);
});

module.exports = router;