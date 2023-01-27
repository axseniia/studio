import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

import { router } from "../../../router/router";

import { StudentsContext } from "../../../context/context";
import { filters } from "../../../data";
import { filterStudents } from '../../../utils/search';
import { IStudentsFilters } from '../../../interfaces/interfaces';

import './app.css';

export function App() {
    const [studentsFilters, setFilter] = React.useState(filters);
    const [students, setStudents] = React.useState([]);
    const [filteredStudents, setFilteredStudents] = React.useState([]);
    const [studentsCounter, setStudentsCounter] = React.useState(0);

    React.useEffect(() => {
        fetch('https://mockend.com/axseniia/studio/users')
            .then(response => response.json())
            .then(data => {
                setStudents(data);
                setFilteredStudents(data);
                setStudentsCounter(data.length);
            });       
    },[]);

    return (
        <StudentsContext.Provider value = {
            {
                filteredStudents,
                studentsFilters,
                studentsCounter,
                onFiltersChange
            }
        }>
            <Header/>
            <RouterProvider router={router} />
            <Footer/>
        </StudentsContext.Provider>
    );

    function onFiltersChange(newFilters: IStudentsFilters) {
        const newFilteredStudents = filterStudents(newFilters, students);
        setFilteredStudents(newFilteredStudents);
        setFilter(newFilters);
        setStudentsCounter(newFilteredStudents.length);
    };
}