import * as React from "react";
import { StudentSnippet } from "../studentSnippet/StudentSnippet";
import { IStudent, StudentList } from "../../../interfaces/interfaces";
import { StudentsFilters } from "../../studentsFilterComponents/studentsFilters/StudentsFilters";
import { StudentsContext } from "../../../context/context";
import './studentsList.css';

export function StudentsList() {
    return (
        <StudentsContext.Consumer>
            {({filteredStudents, studentsCounter}: {filteredStudents: StudentList, studentsCounter: number}) => (
                <div className="studentsList">
                    <StudentsFilters/>
                    <div className='studentsCounter'>{studentsCounter} students</div>
                    {filteredStudents.map((student: IStudent, index: number) => (
                        <StudentSnippet key={index} {...student} />
                    ))}
                </div>
            )}
        </StudentsContext.Consumer>
    );
}