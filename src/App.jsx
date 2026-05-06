import Nav    from './components/Nav'
import Hero   from './components/Hero'
import Ticker from './components/Ticker'
import How    from './components/How'
import Cta    from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Ticker />
      <How />
      <Cta />
      <Footer />
    </div>
  )
}