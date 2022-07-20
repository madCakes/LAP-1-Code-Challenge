const text = document.querySelector("#result");

// async function getRandomPlayer2() {
//   try {
//     const res = await fetch("http://localhost:3000/search/random");
//     const data = await res.json();
//     console.log(data);
//     return JSON.stringify(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

function getRandomPlayer() {
  fetch("http://localhost:3000/search/random")
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("HTTP error " + resp.status);
      }
      return resp.json();
    })
    .then((data) => (text.innerText = JSON.stringify(data)));
}

function displayRandomPlayer(e) {}

window.addEventListener("load", getRandomPlayer);
