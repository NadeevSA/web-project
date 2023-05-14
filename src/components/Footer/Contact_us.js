import './Footer.css'
import { Informer } from '@consta/uikit/Informer'
import { useEffect, useState } from 'react'

function Contact_us() {
    var [informer, setInformer] = useState(false)
    var [name, setName] = useState('')
    var [email, setEmail] = useState('')
    var [msg, setMsg] = useState('')

    var delay = 4000
    var title = name + ' ' + email
    var message = 'Your Message: ' + msg + '. Success submit'

    console.log(name)
    useEffect(() => {
        setTimeout(() => setInformer(false), delay)
    }, [informer])

    return (
        <section id="Contact_us">
            <div className="footer_main_contact_us">
                <div className="left">
                    <h2 className="contact_us">Contact us</h2>
                    <div className="contact_div">Have an inquiry? We’ll be happy to assist you</div>
                    <div>
                        <div>
                            <img className="contact_img" src={require('../../img/V1.png')} />
                            <h5 className="contact_text">+92 333 6527366</h5>
                        </div>
                        <div>
                            <img src={require('../../img/v2.png')} />
                            <h5 className="contact_text">abuzer@greelogix.com</h5>
                        </div>
                        <div>
                            <img src={require('../../img/V3.png')} />
                            <h5 className="contact_text">Plot 252, Block L Phase 2 Johar Town, Lahore, PK</h5>
                        </div>
                    </div>
                </div>
                <div className="rigth">
                    <h2 className="contact_div_right">Fill in your details</h2>
                    <div>
                        <div className="contact_table">
                            <input 
                                className="contact_line"  
                                placeholder="name" 
                                value={name} 
                                onInput={(e) => { setName(e.currentTarget.value)}} />
                        </div>
                        <div className="contact_table">
                            <input 
                                className="contact_line"  
                                placeholder="email" 
                                value={email} 
                                onInput={(e) => { setEmail(e.currentTarget.value)}} />
                        </div>
                        <div className="contact_table">
                            <input 
                                className="contact_line"  
                                placeholder="email" 
                                value={msg} 
                                onInput={(e) => { setMsg(e.currentTarget.value)}} />
                        </div>
                        <button
                            disabled={name == '' || email == '' || msg == ''}
                            className="btn" 
                            onClick={() => setInformer(true)}>Submit</button>
                    </div>
                </div>
            </div>
            {
                informer && 
                <Informer
                    className='informer_submit'
                    status="success"
                    view="filled"
                    title={title}
                    label={message}/>
            }
        </section>
    );
}

export default Contact_us;