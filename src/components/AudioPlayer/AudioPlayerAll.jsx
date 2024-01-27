import React, { useEffect, useRef, useState } from "react";
import {  AWS_BUCKET_PATH } from "../../config/confir";

const AudioPlayerAll = ({ audioFiles }) => {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  const audioRef = useRef();
  const [src, setSrc] = useState(null);
  const [hasLastPlayer, setHasLastPlayer] = useState(false);

  console.log("currentA", currentAudioIndex);
  if (currentAudioIndex > 0) {
    localStorage.setItem("lastPlayIndex", currentAudioIndex);
  }
  //

  const playNextAudio = () => {
    if (currentAudioIndex < audioFiles.length - 1) {
      setCurrentAudioIndex(currentAudioIndex + 1);
      //   console.log("a", audioRef.current);
      audioRef.current.load();
      audioRef.current.play();
    } else {
      // If it's the last audio file, you can handle it here (loop, stop, etc.)
      // For now, let's just stop playing.
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleAudioEnd = () => {
    playNextAudio();
  };

  useEffect(() => {
    let lastIndex = localStorage.getItem("lastPlayIndex");

    if (lastIndex > 0) {
      setSrc(audioFiles[lastIndex]?.audioFileName);
      setHasLastPlayer(true);
    } else {
      setSrc(audioFiles[currentAudioIndex]?.audioFileName);
    }
  }, [currentAudioIndex, audioFiles]);

  const PlayStart = () => {
    setCurrentAudioIndex(0);
    localStorage.setItem("lastPlayIndex", 0);
    setHasLastPlayer(false);
    setSrc(audioFiles[0]?.audioFileName);
    audioRef.current.load();
    audioRef.current.play();
  };

  return (
    <div className="d-flex align-items-center flex-wrap my-3 ">
      {hasLastPlayer && (
        <button className="btn btn-primary " onClick={PlayStart}>
          Click here to play from Start
        </button>
      )}
      <div
        className="d-flex align-items-center "
        style={{ marginLeft: "10px" }}
      >
        {!hasLastPlayer && (
          <button className="btn btn-info " style={{ marginRight: "10px" }}>
            Play All <i className="fa-solid fa-arrow-right"></i>
          </button>
        )}
        <audio ref={audioRef} onEnded={handleAudioEnd} controls>
          <source src={src} type="audio/mp3" />
          All Play
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayerAll;
