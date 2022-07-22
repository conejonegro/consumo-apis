const API_KEY = "api_key=617c85df-e898-4837-b119-16ac6cebe0f8";
const API_KEY_NUMBERS = '617c85df-e898-4837-b119-16ac6cebe0f8';
const REAL_URL = "https://api.thecatapi.com/v1/";
const randomCatsURL = `${REAL_URL}images/search?&limit=3`;
const FAVORITE_CATS_URL = `${REAL_URL}favourites`;


const loadRandomCatsButton = document.getElementById('catButton');
loadRandomCatsButton.addEventListener( 'click', loadRandomCats);


async function loadRandomCats(){

    const res = await fetch(randomCatsURL, {
		method : 'GET',
		headers: { 
			'x-api-key': API_KEY_NUMBERS
		}
	} );
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

				const btn1Elem = document.getElementById('save_in_favorites_btn1');
				const btn2Elem = document.getElementById('save_in_favorites_btn2');
				const btn3Elem = document.getElementById('save_in_favorites_btn3');

				btn1Elem.onclick = () => saveCatInFavorites(data[0].id);
				btn2Elem.onclick = () => saveCatInFavorites(data[1].id);
				btn3Elem.onclick = () => saveCatInFavorites(data[2].id);

        }
 
}

loadRandomCats();


async function showFavoriteCats(){

        const res = await fetch(FAVORITE_CATS_URL, {
			method: 'GET',
			headers: {
				'x-api-key': API_KEY_NUMBERS
			}
		});
        const data = await res.json();

        console.log("Show Favorite Cats");
        console.log(data);

		const favoritosElem = document.getElementById('contenido_de_favoritos');
		favoritosElem.innerHTML = " ";
		
        data.forEach(element => {

            // console.log(element.image.url);
			const articleElem = document.createElement('article');
			const imgElem =	document.createElement('img');
			const buttonElem = document.createElement('button');
			buttonElem.innerText = 'Quitar de favoritos';
			

			articleElem.classList='favorite-article';
			imgElem.src = element.image.url;

			favoritosElem.appendChild(articleElem);
			articleElem.appendChild(imgElem);
			articleElem.appendChild(buttonElem);

			buttonElem.onclick = () => quitarDeFavoritos(element.id)

        });

        // favoriteCatElem.src = data[0].image.url;

}

 showFavoriteCats();


async function saveCatInFavorites(imageId){

        const res = await fetch(FAVORITE_CATS_URL, {
                // Adding method type
                method: "POST",
                // Adding headers to the request
                headers: {
                        "Content-type": "application/json",
						'x-api-key': API_KEY_NUMBERS
                },
                
                // Adding body or contents to send
                body: JSON.stringify({
                        image_id: imageId
                }),
                  
        });

        const data = await res.json();

        if(res.status !== 200){
                console.log(`Hay un error: ${res.status}, Message: ${data.message}`);
                const errorElem = document.getElementById('error_message');
                errorElem.innerHTML = `Hay un error: ${res.status}, Message: ${data.message}`;
        }
        else{
                console.log("SAVED IN FAVORITES");
				showFavoriteCats();
                // console.log(data);
                // console.log(res);
        }
        
}


async function quitarDeFavoritos(elementID){

	const FAVORITE_CATS_URL_DELETE = `${REAL_URL}favourites/${elementID}`;
	const res = await fetch(FAVORITE_CATS_URL_DELETE, { 
		method: 'DELETE',
		headers: {
			'x-api-key': API_KEY_NUMBERS
		}
	});
	const data = await res.json();

	if(res.status !== 200){
		console.log(`Hay un error: ${res.status}, Message: ${data.message}`);
		const errorElem = document.getElementById('error_message');
		errorElem.innerHTML = `Hay un error: ${res.status}, Message: ${data.message}`;
}
	else{
			console.log("SAVED IN FAVORITES");
			console.log(res);
			console.log(data);
			showFavoriteCats();
	}

}