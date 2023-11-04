import React from 'react'
import './LightBox.css'
import { AiOutlineClose } from "react-icons/ai";

const LightBox = ({ image, onClose }) => {

    return (
        <div className="lightbox-overlay" style={{ zIndex: '999' }}>
            <div className="lightbox-content">
                <div className='d-flex justify-content-end align-items-center mb-4'>
                    <button onClick={onClose}>
                        <AiOutlineClose />
                    </button>
                </div>
                <img src={image} alt="Lightbox Image" />
            </div>
        </div>
    )
}

export default LightBox