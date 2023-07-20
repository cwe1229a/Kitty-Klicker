document.addEventListener("DOMContentLoaded", function() {
  const catImage = document.getElementById("catImage");
  const speechBubble = document.getElementById("speechBubble");
  const API_URL = "https://api.thecatapi.com/v1/images/search";
  const MEOW_IMAGE_URL = "https://i.imgur.com/Og3s9G0.jpg"; // New meow image URL

  function fetchCatImage() {
      fetch(API_URL)
      .then(response => response.json())
      .then(data => {
          catImage.src = data[0].url;
      })
      .catch(error => console.error(error));
  }

  function showMeowImage() {
      catImage.src = MEOW_IMAGE_URL;
      speechBubble.classList.add("show");
      setTimeout(() => {
          speechBubble.classList.remove("show");
          fetchCatImage();
      }, 5000);
  }

  fetchCatImage();

  catImage.addEventListener("click", showMeowImage);
});
