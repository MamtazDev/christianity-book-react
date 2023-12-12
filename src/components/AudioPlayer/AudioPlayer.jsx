// import React from 'react';

// const AudioPlayer = ({ src }) => {
//     return (
//         <div>
//             <audio controls>
//                 <source src={src} type="audio/mp3" />
//                 Your browser does not support the audio element.
//             </audio>
//         </div>
//     );
// };

// export default AudioPlayer;

import React, { useEffect, useState } from 'react';

const AudioPlayer = ({ src }) => {
    const [audio] = useState(new Audio());
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        audio.src = src;
        audio.addEventListener('loadeddata', () => {
            setIsPlaying(false);
            // Audio is loaded and can be played
        });

        return () => {
            audio.removeEventListener('loadeddata', () => {});
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
        <div>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
    );
};

export default AudioPlayer;

