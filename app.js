// JavaScript

const catContainer = document.querySelector("#catBox");
const catImage = document.querySelector("#catImage");
const speechBubble = document.querySelector("#speechBubble");

const catApiUrl = "https://api.thecatapi.com/v1/images/search";
const meowCatImageUrl =
  "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg"; // replace with your preferred image URL

catImage.addEventListener("click", function () {
  catImage.classList.add("loading");
  if (catImage.src === meowCatImageUrl) {
    fetchCatImage();
    speechBubble.classList.remove("show");
  } else {
    catImage.src = meowCatImageUrl;
    speechBubble.classList.add("show");
    setTimeout(fetchCatImage, 5000);
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
