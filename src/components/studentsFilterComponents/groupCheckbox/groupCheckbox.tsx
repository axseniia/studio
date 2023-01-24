import * as React from 'react';
import './groupCheckbox.css';

export function GroupCheckbox({group, active}: {group: string, active: boolean}) {
    const className = `groupCheckbox ${active ? 'active': ''}`;
    return (
        <div className={className}>
            {group}
        </div>
    );
}