import './Footer.css'
import Contact_us_left from './Contact_us_left'
import Contact_us_right from './Contact_us_right'

export default function Contact_us() {
    return (
        <section id="Contact_us">
            <div className="footer_main_contact_us">
                <Contact_us_left />
                <Contact_us_right />
            </div>
        </section>
    );
}