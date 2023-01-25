import * as React from "react";
import { IStudent } from '../../interfaces/interfaces';
import './StudentSnippet.css';

export function StudentSnippet({ name, surname }: IStudent ) { 
    return ( 
        <div className='studentSnippet' > 
            <div className='studentName'>{name} {surname}</div> 
        </div> 
    ); 
}