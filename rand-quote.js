window.onload = function (){
    let div = document.querySelector("#quote");
    setInterval(function(){
            getQuote(function(data){
            div.innerHTML = data.quote;
        })
    },2000)
}
function getQuote(callback){
    fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .
    then(callback);
}