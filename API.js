let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        videoId: '3FBp_Tlgefk',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.setVolume(50); // Устанавливает громкость на 50%.
}