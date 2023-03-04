const intervalId = window.setInterval(() => console.log('Ejecución desde setInterval'), 2500);

window.setTimeout(() => window.clearInterval(intervalId), 3000)
