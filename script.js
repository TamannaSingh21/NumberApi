let input = document.getElementById('randomnumber');
const display = document.getElementById('display');
const proxy = 'https://cors-anywhere.herokuapp.com/';

input.addEventListener("input", function () {
  getData();
});

function getData() {
  let number = input.value;
  let url = `${proxy}http://numbersapi.com/${number}/math`;

  if (number !== '') {
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
  }
}
