const text = document.querySelector("#result");

// this works
async function getRandomPlayer2() {
  try {
    const res = await fetch("http://localhost:3000/search/random");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return data;
}

function displayRandomPlayer(e) {
  text.innerHTML = getRandomPlayer2;
}

window.addEventListener("load", displayRandomPlayer);
