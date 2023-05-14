import './Header.css'

function Header() {
  return (
    <header className="header_main">
        <div className="header_div">
            <span>
                <h1 className="header_logo">WOC</h1>
            </span>
            <span className="header_span">
                <h3 className="up_button" href="#Event">NEWS</h3>
                <h3 className="up_button" href="#Tickets">MARKET</h3>
                <h3 className="up_button" href="#Tickets">DOWNLOAD</h3>
                <h3 className="up_button" href="#Tickets">ABOUT</h3>
                <h3 className="up_button" href="#Contact_us">CONTACT</h3>
            </span>
        </div>
    </header>
  );
}

export default Header;
