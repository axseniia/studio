import * as React from 'react';
import { StudentsContext } from '../../../context/context';
import { IStudentsFilters } from '../../../interfaces/interfaces';
import { Checkbox } from "../checkbox/Checkbox";

import './hasActiveAbonementFilter.css';

export function HasActiveAbonementFilter() {
    return (
        <StudentsContext.Consumer>
            {({
                studentsFilters,
                onFiltersChange
            }: {
                studentsFilters: IStudentsFilters, 
                onFiltersChange: (studentsFilters: IStudentsFilters) => void
            }) => (
                <div className="hasActiveAbonementFilter">
                    <Checkbox 
                        active={studentsFilters.activeAbonementFilter}
                        name="has active abonement"
                        onClick={() => onFiltersChange({
                            ...studentsFilters,
                            activeAbonementFilter: !studentsFilters.activeAbonementFilter
                        })}
                    />
                </div>
            )}
        </StudentsContext.Consumer>
    );
}