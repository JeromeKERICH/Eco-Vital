import React from 'react'
import Hero from '../home/HeroSection';
import WhoWeAre from '../home/About';
import Services from '../home/Services';
import TrustSection from '../home/Partners';
import Testimonials from '../home/TestimonialCard';
import CTA from '../home/CTA';


const Home = () => {
  return (
    <div>
      <Hero/>
      <WhoWeAre/>
      <Services/>
      <CTA/>
      <TrustSection/>
      <Testimonials/>
    </div>
  )
}

export default Home
