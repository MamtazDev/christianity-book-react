import React, { useEffect, useState } from "react";

const AudioPlayer = ({ src }) => {
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);

  console.log("src", src);
  useEffect(() => {
    audio.src = src;
    audio.addEventListener("loadeddata", () => {
      setIsPlaying(false);
    });

    return () => {
      audio.removeEventListener("loadeddata", () => {});
    };
  }, [audio, src]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div id="player-container" className="text-end mb-3">
      <button className="btn btn-outline" onClick={togglePlay}>
        <div id="play-pause" class={isPlaying ? "pause" : "play"}></div>
      </button>
    </div>
  );
};

export default AudioPlayer;
