/*export const tweets = [{
  date: '2022-09-19',
  body: 'ejemplo de cuerpo de tweet',
  handler: '@usuario1',
  image: 'https://lllll.jpeg'
},
{
  date: '2022-09-18',
  body: 'ejemplo de cuerpo de otro tweet',
  handler: '@usuario3',
  image: 'https://lllll.jpeg'
},
{
  date: '2022-09-17',
  body: 'ejemplo de cuerpo de otro tweet mucho mucho mas largo',
  handler: '@usuario5',
  image: 'https://lllll.jpeg'
}];
/*/

export async function getTweets() {
  const tweetsUrlOKOK = 'https://gist.githubusercontent.com/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json';  
  //const tweetsUrlKO = 'https://gist.githubus/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json';  <-- url rota para probar la gestión del errror
  //const tweetsUrlOK = 'http://localhost:8000/api/tweets';
  
  const response = await fetch(tweetsUrl); //Con este await gestionamos la promesa que devuelve el fetch
  // const response = await fetch(tweetsUrlOK);
  const tweets = await response.json(); //Con este await gestionamos la promesa que devuelve el response.jason+()
  
    return tweets
  }