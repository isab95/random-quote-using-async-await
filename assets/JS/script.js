console.log ("hello")

buildBody(contactApi())


async function contactApi (){
    const requestUrl = "https://thatsthespir.it/api";
    const request = new Request(requestUrl);
    const response = await fetch(request);
    const result = await response.json();
    return result;
}

function buildBody(obj){
    const main = document.querySelector("Main");
    const myQuote = obj.quote;
    const name = obj.author;
    const thePhoto = obj.photo;
    const myBlockquote = document.createElement("blockquote");
    const myp = document.createElement("p");
    const myImg = document.createElement("img");
    myBlockquote.textContent = myQuote;
    myp.textContent = name;
    myImg.src = thePhoto;
    myImg.alt = "photo of the personality that is know for this quote";
    myBlockquote.appendChild(main);
    myp.appendChild(main);
    myImg.appendChild(main);
}