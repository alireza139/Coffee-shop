import React from "react";
import Comment from "@/components/modules/Comment/Comment";

function Testimonials({ data, count }) {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h4>
          <h1 className="display-4">Our Clients Say</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          {
            data
              .slice(0, count)
              .map(item => (
                <Comment {...item} />
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
