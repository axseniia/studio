import * as React from "react";
import { Outlet, Link } from "react-router-dom";

import { IStudent } from '../../../interfaces/interfaces';
import './StudentSnippet.css';

export function StudentSnippet({ name, surname, id }: IStudent ) { 
    const userLink = `/user/${id}`;
    return ( 
        <Link className='studentSnippet' to = {userLink}> 
            <div className='studentName'>{name} {surname}</div> 
        </Link> 
    ); 
}