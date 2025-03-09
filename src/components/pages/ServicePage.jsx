import React, { useEffect } from 'react'
import Services from '../home/Services'
import CTA from '../home/CTA'

const ServicePage = () => {
  useEffect(() => {
              window.scrollTo(0, 0);
          }, [])
  return (
    <div>
      <Services/>
      <CTA/>
    </div>
  )
}

export default ServicePage
