const proxy = 'https://cors-anywhere.herokuapp.com/';
let input = document.getElementById('randomnumber');
const display = document.getElementById('display');

input.addEventListener("input", function () {
  getData();
});

function getData() {
  let number = input.value;
  const ajax = new XMLHttpRequest();
  if (number !== '') {
    ajax.open("GET", proxy + 'http://numbersapi.com/' + number + '/math', true);
    ajax.onload = function () {
      if (this.status === 200 && this.readyState == 4) {
        console.log(this.responseText);
        let data = this.responseText;
        display.textContent = `${data}`;
      } else {
        onerror();
      }
    };
    ajax.onerror = onerror;
    ajax.send();
  }
}

function onerror() {
  display.textContent = "There was an error!!!";
}
