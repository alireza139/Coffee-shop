import React from "react";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Testimonials from "@/components/modules/Testimonials/Testimonials";

function Testimonial({ comments }) {
  return (
    <>
      <PageHeader route="Testimonial" />
      <Testimonials data={comments} count={comments.length} />
    </>
  );
}

// SSG & ISR
export async function getStaticProps() {
  const commentsResponse = await fetch("http://localhost:4000/comments")
  const commentsData = await commentsResponse.json()

  return {
    props: {
      comments: commentsData
    },
    revalidate: 3600
  }
}

export default Testimonial;
