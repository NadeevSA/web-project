import './Footer.css'
import { useState } from 'react'
import Window_modal from '../Window_modal'

function Contact_us_right() {
    var [informer, setInformer] = useState(false)
    var [name, setName] = useState('')
    var [email, setEmail] = useState('')
    var [msg, setMsg] = useState('')

    var message = 'Your Message: ' + msg + '. Success submit'

    return (
        <div className="rigth">
            <h2 className="contact_div_right">Fill in your details</h2>
            <div>
                <div className="contact_table">
                    <input
                        className="contact_line"
                        placeholder="name"
                        value={name}
                        onInput={(e) => { setName(e.currentTarget.value) }} />
                </div>
                <div className="contact_table">
                    <input
                        className="contact_line"
                        placeholder="email"
                        value={email}
                        onInput={(e) => { setEmail(e.currentTarget.value) }} />
                </div>
                <div className="contact_table">
                    <input
                        className="contact_line"
                        placeholder="message"
                        value={msg}
                        onInput={(e) => { setMsg(e.currentTarget.value) }} />
                </div>
                <button
                    disabled={name == '' || email == '' || msg == ''}
                    className="btn"
                    onClick={() => setInformer(true)}>Submit</button>
            </div>
            {
                informer && 
                <Window_modal 
                    text = {message}
                    callback = {setInformer}
                />
            }
        </div>
    );
}

export default Contact_us_right;