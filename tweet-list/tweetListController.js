import { getTweets } from './tweets.js' // De aquí vienen los datos
import { buildTweetView, buildSpinnerView } from './tweetView.js'

//Obtener el array de tweets
export async function tweetListController(tweetListElement) {
    //Mostrar ruleta, que es una funcionalidad añadida mientras espera los datos. Lo ideal es que lo haga otro controlador.    
    tweetListElement.innerHTML = buildSpinnerView(); //Cargamos la ruleta de carga nada más hacer la petición

    const tweets = await getTweets() //Porque esta función devuelve una promesa
    
    //Ocultar la ruleta para que los tweets no nos pisen la ruleta
    hideSpinner(tweetListElement)
    
    //Generar el HTML que representará un tweet
    for (const tweet of tweets) {       //Por cada tweet de mi variable tweet
        const newTweetElement = buildTweetView(tweet);
        tweetListElement.appendChild(newTweetElement); //Añade al DOM, concretamente a section class tweet-list
    }
    
}

function hideSpinner(tweetListElement) {
    const spinnerElement = tweetListElement.querySelector('.spinner');  //Seleccionamos la clase spinner dentro del nodo tweetListElement, que es en el que estamos.
    spinnerElement.classList.add('hide')                                //Modificamos el atributo class
    
    //tweetListElement.innerHTML = '' <-- Esto es válido. Vaciaría el section justo antes de mostrar los tweets.
}