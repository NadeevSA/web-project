export function OpenModal() {
    const modalWindow = document.getElementById("modalWindow");
    if (!modalWindow){
        const backgroundDiv = document.createElement("div")
        backgroundDiv.setAttribute("id", "modalWindow");
        backgroundDiv.setAttribute('class', 'modal')
        const content = document.createElement("div")
        content.setAttribute('class', 'modal_content')

        const bottom = document.createElement("div")
        bottom.setAttribute('style', 'border-bottom: 5px solid white;')
        const btn_close = document.createElement("div")
        btn_close.setAttribute('class', 'close')
        btn_close.setAttribute('onclick', 'closeModal()')
        btn_close.innerHTML = '&times';
        const logo = document.createElement("h1")
        logo.setAttribute('style', 'color: #fff; font-family:sans-serif; font-size: 30px; margin: 0;')
        logo.innerHTML = 'Musik.';

        const center = document.createElement("div")
        center.setAttribute('style', 'text-align: center;')
        const p1 = document.createElement("p")
        p1.setAttribute('style', 'color: white; font-size: 20px;')
        p1.innerHTML = 'Выберите способ оплаты'
        const p2 = document.createElement("p")
        p2.setAttribute('style', 'color: white;')
        const select = document.createElement("select")
        select.setAttribute('style', 'background-color: black; overflow:  hidden; padding: 3%;')
        select.setAttribute('size', '2')
        const option1 = document.createElement("option")
        option1.setAttribute('style', 'color: white; font-size: 15px;')
        option1.innerHTML = 'Онлайн'
        const option2 = document.createElement("option")
        option2.setAttribute('style', 'color: white; font-size: 15px;')
        option2.innerHTML = 'На кассе в день концерта'

        const btn_select = document.createElement("button")
        btn_select.setAttribute('style', 'cursor: pointer; font-size: 20px; border: 4px solid white; height: 50px; width: 120px; color: white; background-color: transparent;')
        btn_select.innerHTML = 'Выбрать'

        select.appendChild(option1)
        select.appendChild(option2)
        p2.appendChild(select)
        center.appendChild(p1)
        center.appendChild(p2)
        center.appendChild(btn_select)
        bottom.appendChild(btn_close)
        bottom.appendChild(logo)
        content.appendChild(bottom)
        content.appendChild(center)
        backgroundDiv.appendChild(content)

        document.body.prepend(backgroundDiv);
    }
}

window.onclick = function(event) {
    var modalWindow = document.getElementById("modalWindow");
    if (event.target == modalWindow) {
        document.body.removeChild(modalWindow);
    }
}

function closeModal() {
    document.body.removeChild(document.getElementById("modalWindow"));
}