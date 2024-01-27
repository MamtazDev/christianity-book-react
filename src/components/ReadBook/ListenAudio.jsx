import React from "react";

export default function ListenAudio({ audioFile }) {
  
  return (
    <>
      <audio controls>
        <source src={audioFile} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </>
  );
}
