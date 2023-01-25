import * as React from "react";
import { groupFilter } from "../../../data";
import { Header } from "../header/Header";
import { StudentsList } from "../../studentsList/StudentsList";
import { Footer } from "../footer/Footer";
import { StudentsContext } from "../../../context/context";
import './app.css';

export function App() {
    const [searchFilter, setSearchFilter] = React.useState('');
    const [studentsCounter, setStudentsCounter] = React.useState(0);
    const [groupFilters, setGroupFilter] = React.useState(groupFilter);
    const [students, setStudents] = React.useState([]);

    React.useEffect(() => {
        //TODO: какой-то грязный хак, чтобы не запрашивалось на каждый рендер. Надо разобраться, как правильно сделать. Если 0 студентов то говно
        if (students.length === 0) {
            fetch('https://mockend.com/axseniia/studio/users')
            .then(response => response.json())
            .then(data => {
                setStudents(data);
                setStudentsCounter(data.length);
            });
        }
    });

    return (
        <StudentsContext.Provider value = {
            {
                students, 
                searchFilter, 
                groupFilters,
                studentsCounter, 
                setSearchFilter, 
                setGroupFilter, 
                setStudents,
                setStudentsCounter
            }
        }>
            <Header/>
            <StudentsList/>
            <Footer/>
        </StudentsContext.Provider>
    );
}