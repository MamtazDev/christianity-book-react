import React, { useState } from 'react';

const YoutubeVideo = ({ videoId, thumbnailUrl }) => {
    const [videoPlaying, setVideoPlaying] = useState(false);

    const onReady = (event) => {
        event.target.pauseVideo();
    };

    const playVideo = () => {
        setVideoPlaying(true);
    };

    const opts = {
        height: '350',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className='video_modal'>
            {!videoPlaying ? (
                <div className="custom-thumbnail" onClick={playVideo} style={{ cursor: 'pointer' }}>
                    <img className='img-fluid' src={thumbnailUrl} alt="Custom Thumbnail" />
                </div>
            ) : (
                <div className="youtube-video">

                    <iframe
                        title="YouTube Video"
                        width={opts.width}
                        height={opts.height}
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=${opts.playerVars.autoplay}`}
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default YoutubeVideo;
