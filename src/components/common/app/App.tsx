import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

import { router } from "../../../router/router";

import { StudentsContext } from "../../../context/context";
import { filters } from "../../../data";
import { 
    filterStudents,
    createTrieForStudentsList 
} from '../../../utils/search';
import { IStudentsFilters } from '../../../interfaces/interfaces';

import './app.css';

let tierStudents = {}

export function App() {
    const [studentsFilters, setFilter] = React.useState(filters);
    const [filteredStudents, setFilteredStudents] = React.useState();

    React.useEffect(() => {
        fetch('https://mockend.com/axseniia/studio/users')
            .then(response => response.json())
            .then(data => {
                tierStudents = createTrieForStudentsList(data);
                setFilteredStudents(data);
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
            <Header/>
            <RouterProvider router={router} />
            <Footer/>
        </StudentsContext.Provider>
    );

    function onFiltersChange(newFilters: IStudentsFilters) {
        const newFilteredStudents = filterStudents(newFilters, tierStudents);
        setFilteredStudents(newFilteredStudents);
        setFilter(newFilters);
    };
}