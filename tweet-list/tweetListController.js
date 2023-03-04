import { getTweets } from './tweets.js' // De aquí vienen los datos
import { buildTweetView } from './tweetView.js'

//Obtener el array de tweets
export async function tweetListController(tweetListElement) {
    tweetListElement.innerHTML = ''; //"Limpiamos" lo que haya pintado cada vez que le damos al botón
    
    const tweets = await getTweets() //Porque esta función devuelve una promesa
    
    //Generar el HTML que representará un tweet
    for (const tweet of tweets) {       //Por cada tweet de mi variable tweet
        const newTweetElement = buildTweetView(tweet);
        tweetListElement.appendChild(newTweetElement); //Añade al DOM, concretamente a section class tweet-list
    }
}