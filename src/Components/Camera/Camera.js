import React, { useState, useEffect } from "react";
import "./Camera.css";

const Camera = props => {
  //   const { setPlayer1Canvas } = props;
  //   const setPlayer1Canvas = props.setPlayer1Canvas;

  const [player1Picture, setPlayer1Picture] = useState(null);
  const [player2Picture, setPlayer2Picture] = useState(null);

  function accessCamera() {
    // setVideo(document.getElementById('video'));
    var video = document.getElementById("video");

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function(stream) {
          video.srcObject = stream;
          video.play();
        });
    } else {
      console.log("Error: getUserMedia is not supported by this browser");
    }
  }

  function snapPhoto() {
    var video = document.getElementById("video");
    if (!player1Picture) {
      var canvas = document.getElementById("canvas1");
      var context = canvas.getContext("2d");
      context.drawImage(video, 20, 20, 250, 200);

      props.setPlayer1Canvas(canvas);

      setPlayer1Picture(context);
    } else {
      var canvas = document.getElementById("canvas2");
      var context = canvas.getContext("2d");
      context.drawImage(video, 20, 20, 250, 200);

      //   setPlayer2Picture(context);
    }
  }

  useEffect(accessCamera, []);

  return (
    <div>
      <div>
        <h4>Webcam Stream:</h4>

        <div className="camera-container">
          <video id="video" width="250" height="250"></video>
          <button onClick={snapPhoto}>Snap Photo</button>
        </div>
      </div>

      <div>
        <h4>Player1:</h4>

        <div className="camera-container">
          <canvas id="canvas1" width="250" height="250"></canvas>
        </div>
      </div>

      <div>
        <h4>Player2:</h4>

        <div className="camera-container">
          <canvas id="canvas2" width="250" height="250"></canvas>
        </div>
      </div>
    </div>
  );
};
export default Camera;
