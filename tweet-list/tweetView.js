//Pintará todo lo que vamos a construir.

export function buildTweetView(tweet) {
    const newTweetElement = document.createElement('article');
    const tweetDate = new Date(tweet.date)

    newTweetElement.innerHTML = `   
            <p>${tweet.handle}</p>
            <img src="${tweet.avatar}">
            <p>${tweet.content} - ${tweetDate.toISOString()}</p>
            <span>${tweet.retweets} retweets, </span><span>${tweet.likes} likes &</span><span>${tweet.replies} replies.</span>
        `;

    return newTweetElement;
}