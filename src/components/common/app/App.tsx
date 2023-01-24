import * as React from "react";
import { listOfStudents } from "../../../data";
import { Header } from "../header/Header";
import { StudentsList } from "../../studentsList/StudentsList";
import { Footer } from "../footer/Footer";
import { StudentsContext } from "../../../context/context";
import './app.css';


const groupFilters = [
        { name: 'contemp', active: false },
        { name: 'stretching', active: false },
        { name: 'frame up', active: false },
        { name: 'hip hop', active: false },
        { name: 'dance hall', active: false },
        { name: 'high heels', active: false }
    ];

export function App() {
    const [searchFilter, setSearchFilter] = React.useState('');
    const [groupFilter, setGroupFilter] = React.useState(groupFilters);
    const [students, setStudents] = React.useState([]);
    return (
        <StudentsContext.Provider value={{students: listOfStudents, searchFilter, groupFilters, setSearchFilter, setGroupFilter}}>
            <Header/>
            <StudentsList/>
            <Footer/>
        </StudentsContext.Provider>
    );
}