import '../css/tickets.css'
import { OpenModal } from '../js/modal_window.js'

function Tickets() {
  return (
    <section id="Tickets">
        <h1 className="tickets_h1">Choose a Tier that’s right for you</h1>
        <div className="tickets_div">
            <div className="tickets_card_1">
                <h1 className="tickets_card_1_h1">Basic</h1>
                <h1 className="tickets_card_1_h1_price">$100</h1>
                <h3 className="tickets_card_h3">1 Seat Available</h3>
                <h3 className="tickets_card_h3_info">Access to Wifi Router</h3>
                <h3 className="tickets_card_h3_info">Free Food & Coffee</h3>
                <button onClick={OpenModal} class="get_tickets" className="tickets_card_1_btn">Get Tickets</button>
            </div>
            <div className="tickets_card_2_div">
                <h1 className="tickets_card_2_h1">Standart</h1>
                <h1 className="tickets_card_2_h1_price">$150</h1>
                <h3 className="tickets_card_h3">1 Seat Available</h3>
                <h3 className="tickets_card_h3_info">Access to Wifi Router</h3>
                <h3 className="tickets_card_h3_info">Free Food & Coffee</h3>
                <button onClick={OpenModal} class="get_tickets" className="tickets_card_2_btn">Get Tickets</button>
            </div>
            <div className="tickets_card_3_div">
                <h1 className="tickets_card_3_h1">Premium</h1>
                <h1 className="tickets_card_3_h1_price">$200</h1>
                <h3 className="tickets_card_h3">2 Seat Available</h3>
                <h3 className="tickets_card_h3_info">Access to Wifi Router</h3>
                <h3 className="tickets_card_h3_info">Free Food & Coffee</h3>
                <button onClick={OpenModal} class="get_tickets" className="tickets_card_3_btn">Get Tickets</button>
            </div>
        </div>
    </section>
  );
}

export default Tickets;
