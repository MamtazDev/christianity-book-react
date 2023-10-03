import React from "react";
import "./ReadersSay.css";
import round1 from "../../../assets/images/round_pp1.png";
import round2 from "../../../assets/images/round_pp2.png";
import round3 from "../../../assets/images/round_pp3.png";
import ReaderCard from "./ReaderCard";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const ReadersSay = () => {
  return (
    <div>
      <div>
        <div className="mb_all">
          <div className="container">
            <h2>
              What My <span className="txt_curve">Readers</span> Say
              <br />
              About Me.
            </h2>
            <p className="mb_30 sub_header">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            {/*         <div className="row">
              <div className="col-12 col-lg-4">
                <ReaderCard img={round1} name="Indiana James" />
              </div>
              <div className="col-12 col-lg-4">
                <ReaderCard img={round2} name="John Wick" />
              </div>
              <div className="col-12 col-lg-4">
                <ReaderCard img={round3} name="Sara James" />
              </div>
            </div> */}
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              // freeMode={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
  
                768: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
  
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
              }}
            >
              <SwiperSlide>
                <ReaderCard img={round1} name="Indiana James" />
              </SwiperSlide>
              <SwiperSlide>
                <ReaderCard img={round2} name="John Wick" />
              </SwiperSlide>
              <SwiperSlide>
                <ReaderCard img={round3} name="Sara James" />
              </SwiperSlide>
              <SwiperSlide>
                <ReaderCard img={round2} name="John Wick" />
              </SwiperSlide>
             
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadersSay;
