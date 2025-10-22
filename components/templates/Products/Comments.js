import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "@/styles/Product.module.css";

const Comments = ({ data = [] }) => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            TESTIMONIAL
          </h4>
          <h1 className="display-4">Product Comments</h1>
        </div>

        <div className="row justify-content-center">
          {data.length === 0 ? (
            <h2
              style={{
                textAlign: "center",
                color: "gray",
              }}
            >
              No comments for this product
            </h2>
          ) : (
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true} 
              breakpoints={{
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Autoplay]}
              className={styles.swiper}
            >
              {data.map((comment, index) => (
                <SwiperSlide key={index} className={styles.swiper_slide}>
                  <div className="testimonial-item">
                    <div className="d-flex align-items-center mb-3">
                      <img
                        className="img-fluid"
                        width={100}
                        height={100}
                        src={comment.profile}
                        alt={comment.username || "user"}
                        style={{ borderRadius: "50%" }}
                      />
                      <div className="ml-3">
                        <h4>{comment.username}</h4>
                        <p className="text-left mb-0 text-muted">User</p>
                      </div>
                    </div>
                    <p className="m-0 mb-4">{comment.body}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
