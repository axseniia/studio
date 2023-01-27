import * as React from "react";

import './studentContacts.css';

//TODO вынести ссылки, добавить проверку на наличие соц сетей (поменять структуру ответа сервера)
export function StudentContacts({ phone = '' }: { phone: string }) {
    const waLink = 'https://wa.me/' + phone;
    const phoneLink = 'tel:' + phone;
    const telegramLink = 'https://t.me/' + phone;
    return (
        <div className='studentContacts'>
            <a href={phoneLink} target='_blank'>
                <img className="contactIcon" src='/phone.png'/>
            </a>
            <a href={telegramLink} target='_blank'>
                <img className="contactIcon" src='/telegram.png'/>
            </a>
            <a href={waLink} target='_blank'>
                <img className="contactIcon" src='/whatsapp.png'/>
            </a>
        </div>
    );
}