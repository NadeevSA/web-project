import './App.css'
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import Header from './components/Header/Header.js'
import Coins from './components/Coins/Coins.js'
import Upper_text from './components/Header/Upper_text.js'
import Footer from './components/Footer/Footer'
import Contact_us from './components/Footer/Contact_us'
import Tickets from './components/Tickets/Tickets'
import News from './components/News/News'
import Market from './components/Market/Market'
import About from './components/About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import New_detail from './components/News/New_detail';

function App() {
  return (  
  <BrowserRouter>
    <Theme preset={presetGpnDefault}>
      <Routes>
        <Route path='/' element={
          <body>
            <Header />
            <Coins />
            <Upper_text />
            <News />
            <Tickets />
            <Market />
            <About />
            <Contact_us />
            <Footer />
          </body>
          } />
        <Route path='/new_detail/:index' element={
          <body>
            <Header />
            <Coins />
            <New_detail/>
          </body>
        } />
      </Routes>
    </Theme>
  </BrowserRouter>
  );
}

export default App;
