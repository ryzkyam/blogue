import React, { useState, useRef } from 'react';

const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-end justify-end h-auto">
      {/* Button for play and pause */}
      <button
        onClick={togglePlayPause}
        className=" mb-4 w-16 h-16 bg-blue-500 rounded-full text-white flex items-center justify-center focus:outline-none"
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 9v6m4-6v6m-7 3h10a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-6.586-3.941A1 1 0 007 8v8a1 1 0 001.166.987l6.586-3.941a1 1 0 000-1.774z"
            />
          </svg>
        )}
      </button>

      {/* Audio Element */}
      <audio ref={audioRef} src="心海 - Eve MV.mp3" />
    </div>
  );
};

export default PlayButton;