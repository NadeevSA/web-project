import '../css/testimonials.css'
import { left_review, right_review } from '../js/reviews.js'

function Testimonials() {
    function xrtRequest(name, element){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name)
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function() {
            document.getElementById(element).innerHTML = xhr.response.name;
        }
    }
    
    function fetchRequest(element) {
        fetch('https://geek-jokes.sameerkumar.website/api?format=json')
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.getElementById(element).innerHTML = data.joke;
        })
    }
    
    function fetchRequestPicture(number, element) {
        fetch('https://randomfox.ca/images/' + number + '.jpg')
        .then(response => {
            document.getElementById(element).src = response.url;
        })
    }
    
    xrtRequest('ditto', 'left_review_name');
    xrtRequest('psyduck', 'center_review_name');
    xrtRequest('pikachu', 'right_review_name');
    fetchRequest('left_review_text');
    fetchRequest('center_review_text');
    fetchRequest('right_review_text');
    fetchRequestPicture(1, 'left_review_ava')
    fetchRequestPicture(2, 'center_review_ava')
    fetchRequestPicture(3, 'right_review_ava')
    
    return (
    <section id="Testimonials" className="testimonials_section">
        <h1 className="testimonials_h1">Testimonials</h1>
        <div className="testimonials_div">
            <div id="btn_left_review" onClick={left_review} className="testimonials_main">
                <img id="left_review_ava" className="testimonials_img" src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" alt="" />
                <h3 id="left_review_name" className="testimonials_h3">Jonh1</h3>
                <p id="left_review_text" className="testimonials_p">"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Non aspernatur nisi impedit nobis? Tempore quia ipsa 
                    similique corrupti ut. Nemo, modi? Nulla praesentium 
                    ugiat numquam reiciendis. Deserunt aperiam temporibus ullam?"</p>
            </div>
            <div className="testimonials_main_center">
                <img id="center_review_ava" className="testimonials_img" src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" alt="" />
                <h3 id="center_review_name" className="testimonials_h3">Jonh2</h3>
                <p id="center_review_text" className="testimonials_p">"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Non aspernatur nisi impedit nobis? Tempore quia ipsa 
                    similique corrupti ut. Nemo, modi? Nulla praesentium 
                    ugiat numquam reiciendis. Deserunt aperiam temporibus ullam?"</p>
            </div>
            <div id="btn_rigth_review" onClick={right_review} className="testimonials_main">
                <img id="right_review_ava" className="testimonials_img" src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" alt="" />
                <h3 id="right_review_name" className="testimonials_h3">Jonh3</h3>
                <p id="right_review_text" className="testimonials_p">"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Non aspernatur nisi impedit nobis? Tempore quia ipsa 
                    similique corrupti ut. Nemo, modi? Nulla praesentium 
                    ugiat numquam reiciendis. Deserunt aperiam temporibus ullam?"</p>
            </div>
        </div>
    </section>
    );
}

export default Testimonials;