let input = document.getElementById('randomnumber');
const display = document.getElementById('display');

input.addEventListener("input", function () {
  getData();
});

function getData() {
  let number = input.value;
  const ajax = new XMLHttpRequest();
  if (number !== '') {
    ajax.open("GET", 'http://numbersapi.com/', true);
    
    // Error handling
    ajax.onerror = function() {
      display.textContent = "There was an error!!!";
    };
    
    ajax.onload = function () {
      if (this.status === 200 && this.readyState == 4) {
        let data = this.responseText;
        display.textContent = `${data}`;
      } else {
        // Trigger onerror if the response status is not 200
        ajax.onerror();
      }
    };
    ajax.send();
  }
}
