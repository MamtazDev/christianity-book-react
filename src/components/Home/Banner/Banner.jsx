import React, { useEffect, useState } from "react";
import banner from "../../../assets/images/banner.png";
import rightArrow from "../../../assets/images/right_arrow.png";
import { Link } from "react-router-dom";
import "./Banner.css";

import { BASE_URL } from "../../../config/confir";
import { getBookCouponInfo } from "../../../api/coupon";
const Banner = ({ book }) => {

  const [couponCode,setCouponCode]=useState(null)

  const getBookCoupon = async()=>{
    const res = await getBookCouponInfo(book?._id)
    setCouponCode(res)
  }

  useEffect(()=>{
    getBookCoupon()
  },[book])

  return (
    <section>
      <div className="banner mb_all">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 ">
              {/* <span>Let’s make the best Investment!</span> */}
              {couponCode&& <span class="badge text-bg-info">{couponCode[0]?.status && couponCode[0]?.code}</span>}
              <h1>{book?.title}</h1>
              <p
                className="mb-5"
                style={{ maxHeight: 500, overflowY: "scroll" }}
              >
                {book?.description }
                {/* Mencius said, “Truth uttered before its time is always
                dangerous.” It is time for us to have a safe and truthful
                conversation about the religious trauma and mental chaos caused
                by Christianity. Does Christianity cause mental disorder? Is
                Christianity a mental disorder? The more important question is:
                Does Christianity cause mental disorder in you? You have always
                known that something was deeply wrong with Christianity, but you
                didn’t have the words. Now you do. This book is what my clients
                have taught me. The game is over. Christianity is in free fall.
                We are waking up. Christianity was a train wreck of trauma in my
                therapy with clients. That is what this whole book is about and
                how we came to remedy that in a spirituality that honors the
                best of Jesus’s teachings including the best non-Christian
                spiritual teachings that our world has to offer. This book
                focuses on the fundamentals of Christianity that are nearly
                universal such as the words of the Bible as its foundational
                text. Specifically, keep in mind that I am a shrink, so I have
                observed what ideas hurt or heal real people in real time.
                Instead of reactively defending the Bible, as I had been raised
                and programmed to do from birth, I was courageously invited by
                my wife’s family and my clients to look at Christianity and the
                Bible as a therapist and evaluate their value using my standards
                for mental health. My mind went into an entirely new level of
                functioning with what I discovered from the Great Within. We
                need to be confident in these conversations with Christians,
                because we have the high ground. Psychology, history, and
                research are on the side of Truth and not Christianity. With
                this book in hand you will be able to counter any Christian’s
                condemnation of your life. You will feel and be better than you
                have ever been in your life. You can transcend damning Christian
                labels and become your Self. I can’t wait to meet You. You have
                no idea who you are. Though many of the ideas in this book are
                well researched and established, this book as a whole is not a
                scientifically researched, mental health therapy. This book is
                self-help. This book is the extra-professional, spiritual
                process I have personally gone through to heal. This book is the
                process my clients guided me through, a client guide to
                recovery. If you are currently in mental health treatment, first
                consult your therapist regarding use of the practices in this
                book. Your shrink may love this book, hate it, or be
                indifferent. Always do what is best for you, your family, and
                your world. */}
              </p>
              {/* {couponInfo?.status ? (
                <p>
                  "Obtain a Complimentary Copy Using a Free Promo Code:{" "}
                  {couponInfo?.code}”
                </p>
              ) : (
                <p className="mt-5"></p>
              )} */}

              {book?.price != 0 && (
                <Link to={`/read-book/${book._id}`}>
                  Read & Listen Now ${book?.price}{" "}
                  <img src={rightArrow} alt="" />
                </Link>
              )}
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex justify-content-start justify-content-lg-end">
                <img
                  className="img-fluid"
                  src={`${BASE_URL}/files/${book.coverPic}`}
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
