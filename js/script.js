document.addEventListener('DOMContentLoaded', function () {
    const playBtns = document.querySelectorAll('.play-btn');
    const audioPlayer = document.getElementById('mainAudioPlayer');
    let currentBtn = null;

    playBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const src = btn.getAttribute('data-src');
            if (audioPlayer.src !== location.origin + '/' + src && audioPlayer.src !== src) {
                audioPlayer.src = src;
            }
            // If playing something else, update icons
            if (currentBtn && currentBtn !== btn) {
                currentBtn.querySelector('i').classList.remove('fa-pause');
                currentBtn.querySelector('i').classList.add('fa-play');
            }
            currentBtn = btn;
            // Toggle play/pause
            if (audioPlayer.paused || audioPlayer.src !== src) {
                audioPlayer.play();
                btn.querySelector('i').classList.remove('fa-play');
                btn.querySelector('i').classList.add('fa-pause');
            } else {
                audioPlayer.pause();
                btn.querySelector('i').classList.remove('fa-pause');
                btn.querySelector('i').classList.add('fa-play');
            }
        });
    });
    // Return icon to play when audio ends
    audioPlayer.addEventListener('ended', function () {
        if (currentBtn) {
            currentBtn.querySelector('i').classList.remove('fa-pause');
            currentBtn.querySelector('i').classList.add('fa-play');
        }
    });
});