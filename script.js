const videoElement = document.getElementById('video');
const btnElement = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play.

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch (err){
        console.log(`Something went wrong`, err);
    }
}

btnElement.addEventListener('click', async () => {
    // Disable buttton
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset the button
    button.disabled = false;

});

// on load
selectMediaStream();