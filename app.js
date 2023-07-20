let catImage = document.querySelector("#catImage");
let speechBubble = document.querySelector("#speechBubble");

// Function to fetch cat image
function fetchCatImage() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      // Use the URL from the API response
      let catImageUrl = data[0].url;
      catImage.src = catImageUrl;
    })
    .catch((error) => console.error("Error:", error));
}

// Fetch cat image when the page loads
window.onload = fetchCatImage;

// When the image is clicked, show the meowing cat
catImage.addEventListener("click", function () {
  catImage.src = "https://c.tenor.com/I6kN-6X7nhAAAAAj/cat-cute.gif";
  speechBubble.classList.remove("hidden");

  // After 5 seconds, hide the meowing cat and fetch a new cat image
  setTimeout(function () {
    speechBubble.classList.add("hidden");
    fetchCatImage();
  }, 5000);
});
