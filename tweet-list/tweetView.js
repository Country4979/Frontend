//Pintará todo lo que vamos a construir.

export function buildTweetView(tweet) {
    const newTweetElement = document.createElement('article');
    newTweetElement.classList.add('tweet')
    const tweetDate = new Date(tweet.date)

    newTweetElement.innerHTML = `
        <div class="user-info">   
            <span>${tweet.handle}</span>
            <img src="${tweet.avatar}">
        </div>
            <p>${tweet.content} - ${tweetDate.toISOString()}</p>
            <span>${tweet.retweets} retweets, </span><span>${tweet.likes} likes &</span><span>${tweet.replies} replies.</span>
        `;

    return newTweetElement;
}

export function buildSpinnerView() {    //Pinta el spinners.
    return `
    <div class="spinner">
        <div></div>
        <div></div>
        <div></div>
    </div>
    `
}

export function buildErrorLoadingTweets() {
    return `<p class="load-error">Se ha producido un error en la carga de datos. Inténtalo de nuevo más tarde</p>`
}