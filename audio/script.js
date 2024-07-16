document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    var img = document.getElementById('music-img');
    
    img.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();

        } else {
            audio.play();

        }
    });
});
