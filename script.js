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

fetchbtn.addEventListener("click", function () {
  fetch(url)
    .then(function (req) {
      req.json().then(function (data) {
        display.innerText = data[0];
      });
    })
    .catch(function () {
      alert("ERROR!");
    });
});

$("#jquery").click(function () {
  $.getJSON(url).done(function (data) {
    $("#quote").text(data[0]);
  });
});
