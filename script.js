document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('webcam-video');

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                videoElement.srcObject = stream;
            })
            .catch((error) => {
                console.error('Error accessing webcam:', error);
            });
    } else {
        console.error('getUserMedia is not supported');
    }
});