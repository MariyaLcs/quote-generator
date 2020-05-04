let url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

let xhrbtn = document.querySelector("#xhr"),
  fetchbtn = document.querySelector("#fetch"),
  axiosbtn = document.querySelector("#axios"),
  display = document.querySelector("#quote");

xhrbtn.addEventListener("click", function () {
  let XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function () {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var quote = JSON.parse(XHR.responseText)[0];
      display.innerText = quote;
    }
  };
  XHR.open("GET", url);
  XHR.send();
});
