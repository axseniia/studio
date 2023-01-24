import * as React from 'react';

import './searchInput.css';

export function SearchInput () {
    return (
        <div>
            <input className='searchInput' type="text" placeholder='Name, surname or phone number'/>
        </div>
    );
}