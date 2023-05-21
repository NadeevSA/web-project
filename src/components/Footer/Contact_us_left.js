import './Footer.css'
import v1 from '../../img/V1.png'
import v2 from '../../img/v2.png'
import v3 from '../../img/V3.png'

function Contact_us_left() {
    return (
        <div className="left">
            <h2 className="contact_us">Contact us</h2>
            <div className="contact_div">Have an inquiry? We’ll be happy to assist you</div>
            <div>
                <div>
                    <img className="contact_img" src={v1} />
                    <h5 className="contact_text">+92 333 6527366</h5>
                </div>
                <div>
                    <img src={v2} />
                    <h5 className="contact_text">abuzer@greelogix.com</h5>
                </div>
                <div>
                    <img src={v3} />
                    <h5 className="contact_text">Plot 252, Block L Phase 2 Johar Town, Lahore, PK</h5>
                </div>
            </div>
        </div>
    );
}

export default Contact_us_left;