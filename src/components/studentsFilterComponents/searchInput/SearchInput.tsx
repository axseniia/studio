import * as React from 'react';
import { StudentsContext } from "../../../context/context";

import { IStudentsFilters } from '../../../interfaces/interfaces';

import './searchInput.css';

export function SearchInput () {
    return (
        <StudentsContext.Consumer>
            {({studentsFilters, onFiltersChange}: {studentsFilters: IStudentsFilters, onFiltersChange: ({}) => void} ) => (
                <input 
                    className='searchInput' 
                    type="text" 
                    placeholder='Name or surname'
                    value={studentsFilters.searchFilter}
                    onChange={(e) => onFiltersChange({
                        ...studentsFilters,
                        searchFilter: e.target.value
                    })}
                    />
            )}
        </StudentsContext.Consumer>
    );
}