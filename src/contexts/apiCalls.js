const apiCalls = {
  requestTermsInfo(term){
    return fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${term}`, 
    {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "afb46f1ebfmshf5a87452ff654c7p116ab6jsna0f25af55c2e",
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
      }
    })
      .then(response => response.json() )
      .then(data => {return data.list})
      .catch(err => { console.error(err); });
  }
}

export default apiCalls