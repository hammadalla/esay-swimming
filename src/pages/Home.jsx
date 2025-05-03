import React from 'react'
import Herosection from '../Component/HeroSection/Herosection'
import About from '../Component/About/About'
import Programes from '../Component/Programes/Programes'
import Team from '../Component/Team/Team'
import Gallery from '../Component/Gallery/Gallery'
import Testimonial from '../Component/Testimonial/Testimonial'
import Map from '../Component/Map/Map'


export default function Home() {
  return (
    <div>
      <Herosection />
      <About />
      <Programes />
      <Gallery />
      <Team />
      <Testimonial />
      <Map />
    </div>
  )
}
