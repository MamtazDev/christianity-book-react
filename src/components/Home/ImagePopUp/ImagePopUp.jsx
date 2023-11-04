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
    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (image) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };
    return (
        <div className='ImagePopUp py-5' >
            <div className='text-center py-5'>
                <h2>
                    Book Cover
                </h2>
            </div>
            <div className="image-gallery d-flex flex-wrap justify-content-center gap-4 whitespace-nowrap">

                {
                    allCoverImages.map((img, index) => (
                        <div className='me-4' style={{ marginRight: '14px', marginBottom: '20px' }} key={index}>
                            <img

                                width={315}
                                height={200}
                                src={img.src}
                                alt="img"
                                onClick={() => openLightbox(`${img.src}`)}
                            />
                        </div>
                    ))
                }
            </div>

            {lightboxImage && (
                <LightBox image={lightboxImage} onClose={closeLightbox} />
            )}
        </div>
    )
}

export default ImagePopUp