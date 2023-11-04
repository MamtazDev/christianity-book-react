import React, { useState } from 'react'
import './ImagePopUp.css'
import LightBox from '../LightBox/LightBox';
import coverOne from '../../../assets/images/coverOne.jpg'
import coverTwo from '../../../assets/images/coverTwo.jpg'
import coverThree from '../../../assets/images/coverThree.jpg'
import coverFour from '../../../assets/images/coverFour.jpg'
import coverFive from '../../../assets/images/coverFive.jpg'
import coverSix from '../../../assets/images/coverSix.jpg'
import coverSeven from '../../../assets/images/coverSeven.jpg'
import coverEight from '../../../assets/images/coverEight.jpg'
import coverNine from '../../../assets/images/coverNine.jpg'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react/Lightgallery.es5';

const allCoverImages = [
    {
        src: coverOne,
    },
    {
        src: coverTwo,
    },
    {
        src: coverThree,
    },
    {
        src: coverFour,
    },
    {
        src: coverFive,
    },
    {
        src: coverSix,
    },
    {
        src: coverSeven,
    },
    {
        src: coverEight,
    },
    {
        src: coverNine
    },
]


const ImagePopUp = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className='ImagePopUp pb-5'>
            <div className='text-center pb-5'>
                <h2>Book Cover</h2>
            </div>
            <div className="image-gallery text-center">
                <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]} className="d-flex flex-wrap justify-content-center">
                    {allCoverImages.map((img, index) => (
                        <a
                            data-lg-size="1406-1390"
                            className="gallery-item me-4 m-2"
                            data-src={img.src}
                            data-sub-html=""
                        >
                            <img width={315} height={200} src={img.src} className='mb-4' alt="Christianity Book" />
                        </a>

                    ))}
                </LightGallery>
            </div>
        </div>
    );
};

export default ImagePopUp