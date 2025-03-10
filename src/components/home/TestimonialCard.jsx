import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles/Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Alvin Taru",
    role: "CEO, GreenCom Ltd.",
    feedback: "Eco-Vital Consulting transformed our business with strategic insights. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Ngeny",
    role: "Investor, Sustainable Growth Fund",
    feedback: "Professional and insightful guidance. Helped us unlock new investment opportunities.",
  },
  {
    id: 3,
    name: "Michael Tim",
    role: "Founder, EcoSol",
    feedback: "A reliable partner in sustainability consulting. They truly understand ESG integration.",
  },
  {
    id: 4,
    name: "Sarah T",
    role: "CFO, Made Up Investments",
    feedback: "Their financial expertise helped us secure funding and optimize our investment strategy.",
  },
  {
    id: 5,
    name: "David Son",
    role: "Managing Director, Impact Ltd",
    feedback: "An invaluable resource for expanding into African markets. Highly knowledgeable team!",
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <p className="feedback">"{testimonial.feedback}"</p>
              <h3>{testimonial.name}</h3>
              <span>{testimonial.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;