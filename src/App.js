import './App.css'
import Header from './components/Header'
import Category from './components/Category'
import About from './components/About'
import Singers from './components/Singers'
import Footer from './components/Footer'
import Contact_us from './components/Contact_us'
import Testimonials from './components/Testimonials'
import Sponsors from './components/Sponsors'
import Tickets from './components/Tickets'
import Event from './components/Event'

function App() {
  return (
    <body>
      <Header></Header>
      <Category></Category>
      <About></About>
      <Singers></Singers>
      <Event></Event>
      <Tickets></Tickets>
      <Sponsors></Sponsors>
      <Testimonials></Testimonials>
      <Contact_us></Contact_us>
      <Footer></Footer>
    </body>
  );
}

export default App;
