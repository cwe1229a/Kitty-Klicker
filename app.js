// JavaScript

const catContainer = document.querySelector("#catBox");
const catImage = document.querySelector("#catImage");
const speechBubble = document.querySelector("#speechBubble");

const catApiUrl = "https://api.thecatapi.com/v1/images/search";
const meowCatImageUrl = "./bigstock-Closeup-Meowing-Ginger-Cat-On-97254212.jpg"; // replace with your image file name

catImage.addEventListener("click", function () {
  catImage.classList.add("loading");
  if (catImage.src.endsWith(meowCatImageUrl)) {
    fetchCatImage();
    speechBubble.classList.remove("show");
  } else {
    catImage.src = meowCatImageUrl;
    speechBubble.classList.add("show");
    setTimeout(() => {
      speechBubble.classList.remove("show");
    }, 2000);
    setTimeout(fetchCatImage, 2000);
  }
});

fetchCatImage();

function fetchCatImage() {
  fetch(catApiUrl)
    .then((response) => response.json())
    .then((data) => {
      catImage.src = data[0].url;
      catImage.onload = () => {
        catImage.classList.remove("loading");
      };
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
