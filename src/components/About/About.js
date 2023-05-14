import './About.css'
import coin from '../../img/coin.png'
import { useEffect, useState } from 'react'

function About() {
  var [rotation, setRoration] = useState(true)

  useEffect(() => {
    var imgCoin = document.getElementById("imgCoin")
    imgCoin.style.animation = (rotation ? '5' : '0') + 's infinite about_img';
  }, [rotation])

  return (
    <section id="About">
        <div className="about_div">
            <img id='imgCoin' className="about_img" src={coin} alt="" />
            <div>
                <h1 className="about_h1">About WOC</h1>
                <p className="about_p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Assumenda eos laboriosam optio illum odio totam ducimus perferendis corrupti 
                    quam doloremque nihil earum quod deleniti nesciunt quibusdam debitis, obcaecati, 
                    aliquid architecto?</p>
                <button className='btn_animation' onClick={() => setRoration(!rotation)}>
                  {
                    rotation ? "Pause" : "Play"
                  }
                </button>
            </div>
        </div>
    </section>
  );
}

export default About;