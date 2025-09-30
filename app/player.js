import audioController from "../domain/audio_controller";

const player = {
    
    _last: document.getElementById("lastest"),
    _next: document.getElementById("foward"),
    _play: document.getElementById("play"),
    _controller: audioController
}