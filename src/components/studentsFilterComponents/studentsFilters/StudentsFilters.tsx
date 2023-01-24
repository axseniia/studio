import * as React from 'react';
import { SearchInput } from "../searchInput/SearchInput";
import { GroupFilter } from "../groupFilter/GroupFilter";
import './studentsFilters.css';

export function StudentsFilters() {
    return (
        <div className='studentsFilters'>
            <SearchInput/>
            <GroupFilter/>
        </div>
    );
}