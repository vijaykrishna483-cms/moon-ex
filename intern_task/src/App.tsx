import Hero from './components/Hero'
import './App.css'
import Table from './components/Table'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
function App() {

  return (
    <div className='h-full bg-[#071624] bg-cover overflow-hidden'>
      <Hero />
      <Table/>
      <Features/>
      <Faq/>
      <Footer/>
    </div>
   
  )
}

export default App
