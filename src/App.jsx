import Nav     from './components/Nav'
import Hero    from './components/Hero'
import Ticker  from './components/Ticker'
import Product from './components/Product'
import Cta     from './components/Cta'
import Footer  from './components/Footer'
import WhatsappButton from './components/WhatsappButton'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Ticker />
      <Product />
      <Cta />
      <Footer />
      <WhatsappButton />
    </div>
  )
}