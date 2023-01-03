import * as React from "react";
import { IStudent } from '../../interfaces/interfaces';
import { TelegramButton } from "../telegramButton/TelegramButton";
import './StudentSnippet.css';

export function StudentSnippet({ name, email, surname, telegram, phone, status }: IStudent ) { 
    return ( 
        <div className='studentSnippet' > 
            <div className='studentName'>{name} {surname}</div> 
            <TelegramButton telegram={telegram} />
        </div> 
    ); 
}