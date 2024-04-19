// command dibawah berfungsi untuk mendapatkan elemen video dari halaman web dengan id video end-video dan menyimpan dalam variabel video
var video = document.getElementById("end-video");
// command dibawah menggunakan metode document.querySelector() untuk mendapatkan elemen yang mempunyai class "toggle" dari halaman web dan menyimpannya dalam variabel toggleButton
var toggleButton = document.querySelector(".toggle");
// command dibawah menggunakan metode document.querySelector() untuk mendapatkan elemen yang mempunyai class "waktu" dari halaman web dan menyimpannya dalam variabel timeDisplay
var timeDisplay = document.querySelector(".waktu");

// command dibawah berfungsi untuk memulai dan menjeda video
function playPause() {
    if (video.paused) {
        video.play();
        toggleButton.querySelector('.fa-play').style.display = "none";
        toggleButton.querySelector('.fa-pause').style.display = "inline-block";
    } else {
        video.pause();
        toggleButton.querySelector('.fa-play').style.display = "inline-block";
        toggleButton.querySelector('.fa-pause').style.display = "none";
    }
}

// command dibawah berfungsi untuk mengupdate waktu setiap detik
video.addEventListener("timeupdate", updateTime);

// command dibawah berfungsi untuk mengupdate waktu
function updateTime() {
    var currentTime = video.currentTime;
    var duration = video.duration;
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);
    var durationMinutes = Math.floor(duration / 60);
    var durationSeconds = Math.floor(duration % 60);
    timeDisplay.textContent = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds) + " / " + durationMinutes + ":" + (durationSeconds < 10 ? "0" + durationSeconds : durationSeconds);
}

// command dibawah berfugnsi untuk memulai video dan mengatur tampilan tombol berdasarkan status
video.addEventListener("play", function() {
    toggleButton.querySelector('.fa-play').style.display = "none";
    toggleButton.querySelector('.fa-pause').style.display = "inline-block";
});

// command dibawah berfugnsi untuk menjeda video dan mengatur tampilan tombol berdasarkan status
video.addEventListener("pause", function() {
    toggleButton.querySelector('.fa-play').style.display = "inline-block";
    toggleButton.querySelector('.fa-pause').style.display = "none";
});

// command dibawah berfungsi ketika video selesai diputar
video.addEventListener('ended', function() {
    video.currentTime = 0; // Mengatur ulang waktu video ke awal
    video.pause(); // Menghentikan video
    toggleButton.querySelector('.fa-play').style.display = "inline-block"; // Menampilkan tombol play
    toggleButton.querySelector('.fa-pause').style.display = "none"; // Menyembunyikan tombol pause
});


// command dibawah berfungsi untuk mengatur volume video
volumeSlider.oninput = function() {
    video.volume = volumeSlider.value;
}

// command dibawah berfungsi untuk memilih bagian video yang ingin diputar
seekSlider.oninput = function() {
    var seekTo = video.duration * (seekSlider.value / 100);
    video.currentTime = seekTo;
}
