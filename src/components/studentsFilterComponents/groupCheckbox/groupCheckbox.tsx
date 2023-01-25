import * as React from 'react';
import { StudentsContext } from "../../../context/context";

import './groupCheckbox.css';

export function GroupCheckbox({name, active, onClick}: {name: string, active: boolean, onClick: () => void}) {
    const className = `groupCheckbox ${active ? 'active': ''}`;
    return (
        <StudentsContext.Consumer>
            {() => (
                <div className={className} onClick={onClick}>
                    {name}
                </div>
            )}
        </StudentsContext.Consumer>
        
    );
}