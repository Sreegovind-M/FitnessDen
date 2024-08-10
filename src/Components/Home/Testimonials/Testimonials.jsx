import React, { useEffect, useRef } from "react";
import "./Testimonials.css";
import prof from "../../../assets/Images/prof.png";

const testimonials = [
  {
    id: 1,
    text: "This is an amazing product!",
    name: "John Doe",
    profileImg: prof,
  },
  {
    id: 2,
    text: "I had a great experience with this service.",
    name: "Jane Smith",
    profileImg: prof,
  },
  {
    id: 3,
    text: "Highly recommend to everyone!",
    name: "Bob Johnson",
    profileImg: prof,
  },
  {
    id: 4,
    text: "The Challenges are awesome!",
    name: "Charlie",
    profileImg: prof,
  },
  {
    id: 5,
    text: "Will definitely come back for more.",
    name: "Davis",
    profileImg: prof,
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    const scrollStep = 1; // Smaller step for smoother scroll
    const intervalTime = 20; // Smaller interval time for smoother scroll

    const scrollTestimonials = () => {
      scrollAmount += scrollStep;
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };

    const intervalId = setInterval(scrollTestimonials, intervalTime);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="testimonials-header">
        <h1>Testimonials</h1>
        <span>What our clients say</span>
      </div>
      <div className="testimonials-container" ref={containerRef}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-box">
            <img
              src={testimonial.profileImg}
              alt={`${testimonial.name}'s profile`}
              className="profile-img"
            />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
