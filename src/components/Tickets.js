import '../css/tickets.css'
import { OpenModal } from '../js/modal_window.js'

function Tickets() {
  return (
    <section id="Tickets">
        <h1 className="tickets_h1">Select application option</h1>
        <div className="tickets_div">
            <div className="tickets_card_1">
                <h1 className="tickets_card_1_h1">Community</h1>
                <h1 className="tickets_card_1_h1_price">free</h1>
                <h3 className="tickets_card_h3">Powerful APP for trading, free for students, open-source contributors, and individuals</h3>
                <button onClick={OpenModal} class="get_tickets" className="tickets_card_1_btn">Free download</button>
            </div>
            <div className="tickets_card_2_div">
                <h1 className="tickets_card_2_h1">Professional</h1>
                <h1 className="tickets_card_2_h1_price">$150</h1>
                <h3 className="tickets_card_h3">Professional APP for trading best suited to newcomers to the field</h3>
                <button onClick={OpenModal} class="get_tickets" className="tickets_card_2_btn">Free trial</button>
            </div>
            <div className="tickets_card_3_div">
                <h1 className="tickets_card_3_h1">Enterprise</h1>
                <h1 className="tickets_card_3_h1_price">$200</h1>
                <h3 className="tickets_card_h3">Scalable, end-to-end solution for experienced in the field in trading</h3>
                <button onClick={OpenModal} class="get_tickets" className="tickets_card_3_btn">Free trial</button>
            </div>
        </div>
    </section>
  );
}

export default Tickets;
