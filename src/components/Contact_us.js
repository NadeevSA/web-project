import '../css/footer.css'

function Contact_us() {
  return (
    <section id="Contact_us">
        <div className="footer_main_contact_us">
            <div className="left">
                <h2 className="contact_us">Contact us</h2>
                <div className="contact_div">Have an inquiry? We’ll be happy to assist you</div>
                <div>
                    <div> 
                        <img className="contact_img" src={require('../img/V1.png')} />
                        <h5 className="contact_text">+92 333 6527366</h5>
                    </div>
                    <div> 
                        <img src={require('../img/v2.png')} />
                        <h5 className="contact_text">abuzer@greelogix.com</h5>
                    </div>
                    <div> 
                        <img src={require('../img/V3.png')} />
                        <h5 className="contact_text">Plot 252, Block L Phase 2 Johar Town, Lahore, PK</h5>
                    </div>
                </div>
            </div>
            <div className="rigth">
                <h2 className="contact_div_right">Fill in your details</h2>
                <div>
                    <div className="contact_table">
                        <div className="contact_name">Name</div>
                        <div className="contact_email">John Doe</div>
                        <div className="contact_line"></div>
                    </div>
                    <div className="contact_table">
                        <div className="contact_name">Email</div>
                        <div className="contact_email">johndoe2347@mail.com</div>
                        <div className="contact_line"></div>
                    </div>
                    <div className="contact_table">
                        <div className="contact_name">Message</div>
                        <div className="contact_email">Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex |</div>
                        <div className="contact_line"></div>
                    </div>
                    <button className="btn">Submit</button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Contact_us;