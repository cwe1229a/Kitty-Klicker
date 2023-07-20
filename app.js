const catImage = document.getElementById("catImage");
const speechBubble = document.getElementById("speechBubble");

async function fetchCatImage() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  return data[0].url;
}

async function updateImage() {
  catImage.src = await fetchCatImage();
}

catImage.addEventListener("click", () => {
  speechBubble.classList.remove("hidden");
  // You'll need to replace 'meowCatImageURL' with a valid URL to a meowing cat image
  catImage.src = "meowCatImageURL";
  setTimeout(() => {
    updateImage();
    speechBubble.classList.add("hidden");
  }, 5000);
});

updateImage();
