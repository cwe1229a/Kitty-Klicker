const catImage = document.querySelector('#catImage');
const speechBubble = document.querySelector('#speechBubble');

let catImageUrl = 'https://c.tenor.com/I6kN-6X7nhAAAAAj/cat-cute.gif';
let meowCatImageUrl = 'https://c.tenor.com/8Q0A9mDH2_gAAAAj/cat-yawn.gif'; // replace with your own meowing cat image URL

catImage.addEventListener('click', function () {
    if (catImage.src === catImageUrl) {
        catImage.src = meowCatImageUrl;
        speechBubble.classList.add('show'); // Add the "show" class to make the speech bubble visible
    } else {
        catImage.src = catImageUrl;
        speechBubble.classList.remove('show'); // Remove the "show" class to hide the speech bubble
    }
});

