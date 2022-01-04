const musicContainer = document.querySelector(".music-container");
const imageContainer = document.querySelector(".image-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector(".music-info");
const cover = document.querySelector("#cover");
const volumeIcon = document.querySelector("#volume-icon");
const volumeInput = document.querySelector("#volume-range");
const timer = document.querySelector(".timer");
const full_time = document.querySelector(".fullTime");

//Song titles
const songs = [
    "torna a casa",
    "a e man men",
    "red right hand",
    "nothing else matters",
    "hymn for the weekend",
    "never gonna give you up",
    "pa ty",
    "six day war",
    "duro",
];
let songIndex = 0;

//Load song into DOM
loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `/styles/secondwebsite/audio/${song}.mp3`;
    cover.src = `/styles/secondwebsite/img/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add("play");
    imageContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove("play");
    imageContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    playBtn.querySelector("i.fas").classList.add("fa-play");

    audio.pause();
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;


}

// Event Listeners
playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play");
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

nextBtn.addEventListener("click", () => {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
});

prevBtn.addEventListener("click", () => {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
});

audio.addEventListener("timeupdate", (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressTime = (currentTime / duration) * 100;
    progress.style.width = `${progressTime}%`;
});

audio.addEventListener("ended", () => {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
});

progressContainer.addEventListener("click", setProgress);