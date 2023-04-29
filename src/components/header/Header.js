import '../../css/header.css'
import Timer from './Timer.js';

function Header() {
  return (
    <header>
        <img className="header_img" height="700px" width="100%" src="https://e7da267a-b67b-4f13-925b-81f4cc6ae450.selcdn.net/origin/226c8cf3-abdb-42f6-9796-e10a6bce58b7.jpeg" alt="" />
        <div className="header_div">
            <span>
                <h1 className="header_logo">Musik.</h1>
            </span>
            <span className="header_span">
                <a className="up_button" href="#Singers">SINGERS</a>
                <a className="up_button" href="#Event">SCHEDULE</a>
                <a className="up_button" href="#Tickets">TICKETS</a>
                <a className="up_button" href="#Testimonials">COMMENTS</a>
                <a className="up_button" href="#Sponsors">SPONSORS</a>
                <a className="up_button" href="#Contact_us">CONTACT</a>
            </span>
        </div>
        <div className="header_div_main_text_15">
            <h1 className="header_div_h1">THE BEST OF EXPERIENCE</h1>
        </div>
        <div className="header_div_main_text_25">
            <h1 className="header_div_h1">OF MUSIC IN 2023</h1>
        </div>
        <Timer></Timer>
    </header>
  );
}

export default Header;
