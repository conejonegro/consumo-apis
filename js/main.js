const API_KEY = "api_key=617c85df-e898-4837-b119-16ac6cebe0f8";
const URL = `https://api.thecatapi.com/v1/images/search?${API_KEY}&limit=3`;
const catButton = document.getElementById('catButton');
const imgSrc1 = document.getElementById('img1');
const imgSrc2 = document.getElementById('img2');
const imgSrc3 = document.getElementById('img3');

catButton.addEventListener( 'click', loadImage);

async function loadImage(){

        const res = await fetch(URL);
        const data = await res.json();

        imgSrc1.src = data[0].url;
        imgSrc2.src = data[1].url;
        imgSrc3.src = data[2].url;
       
}

loadImage();


