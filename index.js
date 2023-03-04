import { tweetListController } from './tweet-list/tweetListController.js'

const tweetListElement = document.querySelector('.tweet-list'); //Accedems al DOM sólo una vez y desde fuera del controlador

//const loadTweetsButtonElement = document.querySelector('#loadTweetButton') // Accedemos al botón por su Id
//loadTweetsButtonElement.addEventListener('click', () => tweetListController(tweetListElement));
//loadTweetsButtonElement.addEventListener('onmouseover', () => tweetListController(tweetListElement)); <-- No me funciona ??   

tweetListController(tweetListElement); //Recibe un nodo del DOM del cual se tiene que encargar.




