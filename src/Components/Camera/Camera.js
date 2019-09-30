import React from 'react';
import "./Camera.css"

const Camera = () => {

  function accessCamera() {
    var video = document.getElementById('video');

    if(navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.srcObject = stream;
            video.play();
        });
    }
    else{
        console.log("Error: getUserMedia is not supported by this browser")
    }
  }

  function snapPhoto() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');
    
    context.drawImage(video, 20, 20, 250, 200);
  }

  return (
    <div className="adjacent-container">
        <div className="seperate-box">
            <h4>Webcam Stream:</h4>

            <div className="camera-container">
                <video id="video" width="250" height="250"></video>
            </div>

            <br />

            <div>
                <button onClick={accessCamera}>Start Stream</button>
            </div>
        </div>

        <div className="seperate-box">
            <h4>Your Photo:</h4>

            <div className="camera-container">
                <canvas id="canvas" width="250" height="250"></canvas>
            </div>

            <br />

            <div>
                <button onClick={snapPhoto}>Snap Photo</button>
            </div>
        </div>
    </div>
  );
};
export default Camera;
