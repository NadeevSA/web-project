import './App.css'
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import Header from './components/Header/Header.js'
import Coins from './components/Coins/Coins.js'
import Upper_text from './components/Header/Upper_text.js'
import Footer from './components/Footer/Footer'
import Contact_us from './components/Footer/Contact_us'
import Download from './components/Download/Download'
import News from './components/News/News'
import Market from './components/Market/Market'
import About from './components/About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import New_detail from './components/News/New_detail';

export default function App() {
  return (  
  <BrowserRouter>
    <Theme preset={presetGpnDefault}>
      <Routes>
        <Route path='/' element={
          <div>
            <Header />
            <Coins />
            <Upper_text />
            <News />
            <Download />
            <Market />
            <About />
            <Contact_us />
            <Footer />
          </div>
          } />
        <Route path='/new_detail/:index' element={
          <div>
            <Header />
            <Coins />
            <New_detail/>
          </div>
        } />
      </Routes>
    </Theme>
  </BrowserRouter>
  );
}
