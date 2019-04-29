const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    const p = document.createElement('p');
    const data = JSON.parse( xhr.responseText ); //Convert the JSON string into a JS object.
    p.innerHTML = data.text; // data["text"]
    document.body.appendChild(p);
  };

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send();   // Asyncronous

};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact();