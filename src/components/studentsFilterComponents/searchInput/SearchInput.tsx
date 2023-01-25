import * as React from 'react';
import { StudentsContext } from "../../../context/context";

import './searchInput.css';

export function SearchInput () {
    return (
        <StudentsContext.Consumer>
            {({searchFilter, setSearchFilter}: {searchFilter: string, setSearchFilter: ({}) => void} ) => (
                <input 
                    className='searchInput' 
                    type="text" 
                    placeholder='Name, surname or phone number'
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    />
            )}
        </StudentsContext.Consumer>
    );
}