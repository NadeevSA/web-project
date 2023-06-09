import './Window_modal.css' 

export default function Window_modal(props) {
    

    return (
        <div className='modal_window'>
            <div className='modal_content'>
                <h3>{props.text}</h3>
                <div>
                    <button onClick={() => props.callback(false)}>Close</button>
                </div>
            </div>
        </div>
    );
}
