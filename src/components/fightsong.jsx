import React, { useRef, useState } from "react";

function AudioButton() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button id="partyButton" onClick={toggleAudio}>
        {isPlaying ? "Pause" : "Rock Chalk?"}
      </button>
      <audio ref={audioRef} src="/songs/Jayhawk.mp3" />
    </div>
  );
}

export default AudioButton;
