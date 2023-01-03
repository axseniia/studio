import * as React from "react";
import { IStudent } from '../interfaces/interfaces';

export function StudentSnippet({ name, email }: IStudent ) { 
    return ( 
        <div className="studentSnippet"> 
            <h3>{name}</h3> 
            <p>{email}</p> 
        </div> 
    ); 
}