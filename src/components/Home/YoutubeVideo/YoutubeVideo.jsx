import React, { useState } from 'react';

const YoutubeVideo = ({ videoId, thumbnailUrl }) => {
    const [videoPlaying, setVideoPlaying] = useState(false);

    const playVideo = () => {
        setVideoPlaying(true);
    };

    const opts = {
        height: '350',
        playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,  // Remove YouTube logo
        },
    };

    return (
        <div>
            {!videoPlaying ? (
                <div className="custom-thumbnail" onClick={playVideo}>
                    <img className='img-fluid' src={thumbnailUrl} alt="Custom Thumbnail" />
                </div>
            ) : (
                <div className="youtube-video">
                    <iframe
                        allow='autoplay'
                        title="YouTube Video"
                        width={opts.width}
                        height={opts.height}
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=${opts.playerVars.autoplay}&controls=${opts.playerVars.controls}&showinfo=${opts.playerVars.showinfo}&modestbranding=${opts.playerVars.modestbranding}`}
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default YoutubeVideo;
