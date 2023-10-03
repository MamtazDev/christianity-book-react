import React from 'react';
import './PointsCovered.css'

const PointsCovered = () => {
    return (
        <>
              <div className="mb_all">
                <div className="container">
                    <h2 className="mb_30">
                        Points we've <span className="txt_curve">Covered</span><br/> in this Book.
                    </h2>

                    <div className="pointsCover">
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="d-flex flex-column justify-content-between h-100 gap-2 gap-lg-0">
                                    <div className="pointBoxShadow">
                                        <span>Point 01</span>
                                        <h6>Getting Started</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                                    <div className="pointBoxShadow">
                                        <span>Point 02</span>
                                        <h6>Getting Started</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="pointBoxShadow h-100">
                                    <span>Point 03</span>
                                    <h6>The Language of Gossip Box</h6>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy
                                        text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                        text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="d-flex flex-column justify-content-between h-100 gap-2 gap-lg-0">
                                    <div className="pointBoxShadow ">
                                        <span>Point 04</span>
                                        <h6>The rise of trend design</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                                    <div className="pointBoxShadow">
                                        <span>Point 05</span>
                                        <h6>Getting Started</h6>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default PointsCovered;