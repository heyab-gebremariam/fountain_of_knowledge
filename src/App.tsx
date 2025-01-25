import './App.css'
import { About } from './components/about'
import { Appointment } from './components/appointment'
import { CallToAction } from './components/callToAction'
import { Carousel } from './components/carousel'
import { Classes } from './components/classes'
import { Facilities } from './components/facilities'
import { Footer } from './components/footer'
import { Navbar } from './components/navbar'
import { Team } from './components/team'
import { Testimonial } from './components/testimonial'

function App() {

  return (
    <>
      <Navbar />
      <Carousel />
      <Facilities />
      <About />
      <CallToAction />
      <Classes />
      <Appointment />
      <Team />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
