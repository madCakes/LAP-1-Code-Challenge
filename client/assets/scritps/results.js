const text = document.querySelector("#result");

async function getRandomPlayer2() {
  try {
    const res = await fetch("http://localhost:3000/search/random");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function displayRandomPlayer(e) {
  e.target.value = document.querySelector("#text").innerHTML = getRandomPlayer2;
}

window.addEventListener("load", displayRandomPlayer);
