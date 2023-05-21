import Window_modal from '../Window_modal'
import Download_card from './Download_card'
import './Tickets.css'
import { useState } from 'react'


function Tickets() {
    var [open, setOpen] = useState(false)
    var [nameVersion, setNameVersion] = useState('')
    
    const callback = (name) => {
        setNameVersion(name)
        setOpen(!open)
    }

    return (
        <div id="Download">
            <section id="Tickets">
                <h1 className="tickets_h1">Select application option</h1>
                <div className="tickets_div">
                    <Download_card 
                        mainClass = "tickets_card_1"
                        h1Class = "tickets_card_1_h1"
                        h1PriceClass = "tickets_card_1_h1_price"
                        h3Class = "tickets_card_h3"
                        btnClass = "tickets_card_1_btn"
                        h1 = "Community"
                        price = "free"
                        h3 = "Powerful APP for trading, free for students, open-source contributors, and individuals."
                        btn = "Free download"
                        callback = {callback}
                    />
                    <Download_card 
                        mainClass = "tickets_card_2_div"
                        h1Class = "tickets_card_2_h1"
                        h1PriceClass = "tickets_card_2_h1_price"
                        h3Class = "tickets_card_h3"
                        btnClass = "tickets_card_2_btn"
                        h1 = "Professional"
                        price = "$150"
                        h3 = "Professional APP for trading best suited to newcomers to the field."
                        btn = "Free trial"
                        callback = {callback}
                    />
                    <Download_card 
                        mainClass = "tickets_card_3_div"
                        h1Class = "tickets_card_3_h1"
                        h1PriceClass = "tickets_card_3_h1_price"
                        h3Class = "tickets_card_h3"
                        btnClass = "tickets_card_3_btn"
                        h1 = "Enterprise"
                        price = "$200"
                        h3 = "Scalable, end-to-end solution for experienced in the field in trading."
                        btn = "Free trial"
                        callback = {callback}
                    />
                </div>
            </section>
            {
                open && 
                <Window_modal 
                    text={`Thank you for download ${nameVersion} version`}
                    callback={setOpen}
                />
            }
        </div>
    );
}

export default Tickets;
