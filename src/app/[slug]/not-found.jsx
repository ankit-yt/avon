import About from '@/components/sections/About'
import Award from '@/components/sections/Award'
import Blog from '@/components/sections/Blog'
import Charges from '@/components/sections/Charges'
import City from '@/components/sections/City'
import CompanyClints from '@/components/sections/CompanyClints'
import Covid19 from '@/components/sections/Covid19'
import Faq from '@/components/sections/Faq'
import FeedBack from '@/components/sections/FeedBack'
import Footer from '@/components/sections/Footer'
import Gallery from '@/components/sections/Gallery'
import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/How it work/HowItWorks'
import MainPhoto from '@/components/sections/MainPhoto'
import Map from '@/components/sections/Map'
import Media from '@/components/sections/Media'
import OurFacilities from '@/components/sections/OurFacilities'
import Service from '@/components/sections/Service'
import Social from '@/components/sections/Social'
import SwachhBharat from '@/components/sections/SwachhBharat'
import Versus from '@/components/sections/Versus'
import Videos from '@/components/sections/Videos/Video'
import VisionMission from '@/components/sections/VisionMission'
import Why from '@/components/sections/Why'
import Enquiry from '@/components/sections/costCalculator/CostCalculator'
import CostCalculator from "@/components/sections/costCalculator/CostCalculator";
import React from 'react'

function notFound() {
  return (
    <>
    <Hero />
      <MainPhoto />
       <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        </div>  
      <About/>
      <VisionMission/>
      <Why/>
      <SwachhBharat/>
      <Award/>
      
      <Media/>
      <Versus/>
      <City/>
      <HowItWorks/>
      <Service/>
      <OurFacilities/>
      
      <Gallery/>
      <Videos/>
      <Covid19/>
      <Blog/>
      <Faq/>
      <Charges/>
      <CostCalculator/>
      <FeedBack/>
      <Enquiry/>
      <Map/>
      <CompanyClints/>
      <Footer/>
      <Social/>
      </>
  )
}

export default notFound
