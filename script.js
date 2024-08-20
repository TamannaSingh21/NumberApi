const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = `http://numbersapi.com/${number}/math`;
const url = proxyUrl + targetUrl;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    display.textContent = data;
  })
  .catch(error => {
    display.textContent = "There was an error: " + error.message;
    console.error('There was a problem with the fetch operation:', error);
  });
