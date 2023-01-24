import * as React from "react";
import { listOfStudents } from "../../../data";
import { Header } from "../header/Header";
import { StudentsList } from "../../studentsList/StudentsList";
import { Footer } from "../footer/Footer";
import './app.css';

export function App() {
    return (
        <div>
            <Header/>
            <StudentsList students = {listOfStudents}/>
            <Footer/>
        </div>
    );
}