import * as React from "react";
import { StudentsFilters } from "../studentsFilterComponents/studentsFilters/StudentsFilters";
import { StudentsList } from "./studentsList/StudentsList";

import { endPoints } from '../../utils/endPoints';
import {
    filterStudents,
    createTrieForStudentsList 
} from '../../utils/search';
import { filters } from "../../utils/data";
import { StudentsContext } from "../../context/context";
import { IStudentsFilters } from '../../interfaces/interfaces';

export let tierStudents: any = {};

export function StudentsListPage() {
    const [studentsFilters, setFilter] = React.useState(filters);
    const [filteredStudents, setFilteredStudents] = React.useState([]);

    React.useEffect(() => {
        fetch(endPoints.studentsListURL)
            .then(response => response.json())
            .then(data => {
                tierStudents = createTrieForStudentsList(data);
                setFilteredStudents(data);
            })
            .catch((error) => {
                console.error('Error:', error);
              });       
    },[]);

    return (
        <StudentsContext.Provider value = {
            {
                filteredStudents,
                studentsFilters,
                onFiltersChange
            }
        }>
            <StudentsFilters/>
            <StudentsList/>
        </StudentsContext.Provider>
    );

    function onFiltersChange(newFilters: IStudentsFilters) {
        setFilteredStudents(filterStudents(newFilters, tierStudents));
        setFilter(newFilters);
    };
}