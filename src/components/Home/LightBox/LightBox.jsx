import React from 'react'
import './LightBox.css'

const LightBox = ({ image, onClose }) => {
    return (
        <div className="lightbox-overlay" style={{zIndex: '999'}}>
            <div className="lightbox-content">
                <img src={image} alt="Lightbox Image" />
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default LightBox