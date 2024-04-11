import { useState } from "react";
import ReactModal from "react-modal";

export default function ModalOrder({productName, modalIsOpen, setModalIsOpen}){
    const [message, setMessage] = useState('');
    function closeModal(){
        setModalIsOpen(false);
    }
    function postOrder(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            body: formData
        });
        event.target.reset();
        setMessage('Заявка отправлена');
    }
    return(
        <ReactModal isOpen={modalIsOpen}>
            <p>Заказать товар "{productName}"?</p>
            <form onSubmit={postOrder}>
                <button type="submit">Заказать</button>
                <button onClick={closeModal}>Отмена</button>
            </form>
            {message}
        </ReactModal>
    )
}