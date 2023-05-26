import './Header.css'

export default function Header() {
  return (
    <header className="header_main">
        <div className="header_div">
            <span>
                <h1 className="header_logo">WOC</h1>
            </span>
            <span className="header_span">
                <h3 className="up_button" onClick={()=> { window.scrollTo(0, document.getElementById('news').offsetTop)}}>NEWS</h3>
                <h3 className="up_button" onClick={()=> { window.scrollTo(0, document.getElementById('Download').offsetTop)}}>DOWNLOAD</h3>
                <h3 className="up_button" onClick={()=> { window.scrollTo(0, document.getElementById('Coins').offsetTop)}}>COINS</h3>
                <h3 className="up_button" onClick={()=> { window.scrollTo(0, document.getElementById('About').offsetTop)}}>ABOUT</h3>
                <h3 className="up_button" onClick={()=> { window.scrollTo(0, document.getElementById('Contact_us').offsetTop)}}>CONTACT</h3>
            </span>
        </div>
    </header>
  );
}
