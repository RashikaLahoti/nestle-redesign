import React from 'react'
import HeroSection from '../components/HeroSection'
import Section2 from '../components/Section2'
import BingeBestsellers from '../components/BingeBestsellers'
import ScrollProducts from '../components/ScrollProducts'
import HighlightsBar from '../components/HighlightsBar'
import DistributorSection from '../components/DistributorSection'
import FeaturedStories from '../components/FeaturedStories'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import BottomSlideBar from '../components/BottomSlidebar'
import Quote from '../components/Quote'

const HomeLayout = () => {
  return (
    <div>
        <HeroSection/>
      <Section2/>
      <BingeBestsellers/>
      <ScrollProducts/>
      <HighlightsBar/>
      <DistributorSection/>
      <Quote/>
      <FeaturedStories/>
      <ContactUs/>
      <Footer/>
      <BottomSlideBar/>
    </div>
  )
}

export default HomeLayout