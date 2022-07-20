const randomButton = document.querySelector("#random");
const searchButton = document.querySelector("#search");

function getRandomPlayer(e) {
  e.preventDefault();
  fetch("http://localhost:3000/search/random")
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("HTTP error " + resp.status);
      }
      return resp.json();
    })
    .then(
      (player) =>
        (document.getElementById("result").innerText = JSON.stringify(player))
    )
    .catch((err) => {
      console.log(err);
    });
}

function getPlayers(e) {
  e.preventDefault();
  fetch("http://localhost:3000/search")
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("HTTP error " + resp.status);
      }
      return resp.json();
    })
    .then(
      (player) =>
        (document.getElementById("text").innerText = JSON.stringify(player))
    )
    .catch((err) => {
      console.log(err);
    });
}

function openPage() {
  window.open("../client/results.html");
  //   getRandomPlayer();
}

randomButton.addEventListener("click", openPage);
searchButton.addEventListener("click", getPlayers);

// testing

// randomButton.addEventListener("click", getRandomPlayer2);
