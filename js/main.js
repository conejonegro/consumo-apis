const API_KEY = "api_key=617c85df-e898-4837-b119-16ac6cebe0f8";
const REAL_URL = "https://api.thecatapi.com/v1/";
const randomCatsURL = `${REAL_URL}images/search?${API_KEY}&limit=3`;
const favoriteCatsUrl = `${REAL_URL}favourites?${API_KEY}`;

const loadRandomCatsButton = document.getElementById('catButton');
loadRandomCatsButton.addEventListener( 'click', loadRandomCats);

async function loadRandomCats(){

        const res = await fetch(randomCatsURL);
        const data = await res.json();

        const imgElem1 = document.getElementById('img1');
        const imgElem2 = document.getElementById('img2');
        const imgElem3 = document.getElementById('img3');

        console.log("Random Cats");
        console.log(data);

        imgElem1.src = data[0].url;
        imgElem2.src = data[1].url;
        imgElem3.src = data[2].url;
       
}

loadRandomCats();

async function loadFavoriteCats(){

        const res = await fetch(favoriteCatsUrl);
        const data = await res.json();

        console.log("Favorite Cats");
        console.log(data);

}


loadFavoriteCats();


