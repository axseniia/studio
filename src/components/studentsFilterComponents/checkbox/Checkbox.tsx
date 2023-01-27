import * as React from 'react';

import './checkbox.css';

export function Checkbox({name, active, onClick}: {name: string, active: boolean, onClick: () => void}) {
    const className = `Checkbox ${active ? 'active': ''}`;
    return (
        <div className={className} onClick={onClick}>
            {name}
        </div>
    );
}