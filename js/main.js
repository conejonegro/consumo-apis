const API_KEY = "api_key=617c85df-e898-4837-b119-16ac6cebe0f8";
const REAL_URL = "https://api.thecatapi.com/v1/";
const randomCatsURL = `${REAL_URL}images/search?${API_KEY}&limit=3`;
const FAVORITE_CATS_URL = `${REAL_URL}favourites?${API_KEY}`;

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
        // console.log(res);

        if(res.status !== 200){
                console.log(`Hay un error: ${res.status}, Message: ${data.message}`);
                const errorElem = document.getElementById('error_message');
                errorElem.innerHTML = `Hay un error: ${res.status}, Message: ${data.message}`;
        }
        else{
                imgElem1.src = data[0].url;
                imgElem2.src = data[1].url;
                imgElem3.src = data[2].url;
        }
 
}

loadRandomCats();


async function showFavoriteCats(){

        const res = await fetch(FAVORITE_CATS_URL);
        const data = await res.json();

        console.log("Show Favorite Cats");
        console.log(data);

        const favoriteCatElem = document.getElementById('favoriteCats');

        console.log(data[0].image.url); 

        favoriteCatElem.src=data[0].image.url;

}

showFavoriteCats();

const btn1Elem = document.getElementById('save_in_fav_btn1');
btn1Elem.addEventListener('click', saveFavoriteCats);

async function saveFavoriteCats(){

        const res = await fetch(FAVORITE_CATS_URL, {
                // Adding method type
                method: "POST",
                // Adding headers to the request
                headers: {
                        "Content-type": "application/json",
                },
                
                // Adding body or contents to send
                body: JSON.stringify({
                        image_id: "9ccXTANkb"
                }),
                  
        });

        const data = await res.json();

        if(res.status !== 200){
                console.log(`Hay un error: ${res.status}, Message: ${data.message}`);
                const errorElem = document.getElementById('error_message');
                errorElem.innerHTML = `Hay un error: ${res.status}, Message: ${data.message}`;
        }
        else{
                
        }
        
        console.log("SAVE FAVORITES");
        console.log(data);
        console.log(res);

}


