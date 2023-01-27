import * as React from "react";
import { Link } from "react-router-dom";

import { IStudent } from '../../../interfaces/interfaces';
import './StudentSnippet.css';

export function StudentSnippet({ name, surname, id }: IStudent ) { 
    const userLink = `/user/${id}`;
    return ( 
        <Link className='studentSnippet' to = {userLink}> 
            <div className='studentSnippetName'>{name} {surname}</div> 
        </Link> 
    ); 
}