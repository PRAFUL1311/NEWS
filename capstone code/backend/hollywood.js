var url = "https://newsapi.org/v2/everything?q=hollywood&apiKey=a63eff55710e40b39e62354524e0f8a3";
var articles = null;
hollywoodSection = document.getElementById("hollywoodSection");
fetch(url)
    .then(function(response) {
        return response.json();
    }).then((data)=>{
        var articles = data.articles;
        let newHTML = " ";        
        for(let x = 0; x<Object.keys(articles).length; x++){
             news = `<div class="row g-0"><div class="col-md-4">  <img src=${articles[x]["urlToImage"]} class="img-fluid rounded-start" alt="..."></div><div class="col-md-8"> <div class="card-body">   <h5 class="card-title">${articles[x]['title']}</h5>   <p class="card-text">${articles[x]["description"]}</p>   <p class="card-text"><small class="text-muted">published at:${articles[x]["publishedAt"]}</small></p> </div> </div></div>`;
            newHTML += news;
        }

        hollywoodSection.innerHTML = newHTML;    
});



