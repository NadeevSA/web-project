import '../../css/header.css'
import Timer from './Timer.js';

function Upper_text() {
  return (
    <header className="header_main">
        <div className="header_div_main_text_15">
            <h1 className="header_div_h1">THE BEST SITE ABOUT CRYPTOCURRENCIES</h1>
        </div>
        <div className="header_div_main_text_30">
            <h1 className="header_div_h1">NEXT EVENT IN...</h1>
        </div>
        <Timer></Timer>
    </header>
  );
}

export default Upper_text;