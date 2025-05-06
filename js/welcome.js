const rockImages = [
    "/img/stone1.png",
    "/img/stone2.png",
];
let currentIndex = 0;

const rockImg = document.getElementById("rock-img");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

function updateRockDisplay() {
    const rockImg = document.getElementById("rock-img");
    rockImg.src = rockImages[currentIndex];
    localStorage.setItem("selectedRock", rockImages[currentIndex]);
}

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + rockImages.length) % rockImages.length;
    updateRockDisplay();
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % rockImages.length;
    updateRockDisplay();
});

document.querySelector('.brightness').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const volumeIcon = document.getElementById('volume-icon');
let isMuted = true;

volumeIcon.addEventListener('click', () => {
    isMuted = !isMuted;
    if (isMuted) {
        volumeIcon.src = '/img/sound-off.svg';
        volumeIcon.alt = 'muted';
        // Optional: mute audio here if you have one
        // audioElement.muted = true;
    } else {
        volumeIcon.src = '/img/sound-on.svg';
        volumeIcon.alt = 'volume';
        // audioElement.muted = false;
    }
});