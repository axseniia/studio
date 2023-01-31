import * as React from "react";
import { StudentSnippet } from "../studentSnippet/StudentSnippet";
import { Loader } from "../../common/loader/Loader";

import { IStudent, StudentList } from "../../../interfaces/interfaces";
import { StudentsContext } from "../../../context/context";
import './studentsList.css';

export function StudentsList() {
    return (
        <StudentsContext.Consumer>
            {({
                filteredStudents, 
                studentsCounter
            }: {
                filteredStudents: StudentList, 
                studentsCounter: number
            }) => filteredStudents ? (
                <div className="studentsList">
                    <div className='studentsCounter'>{filteredStudents.length} students</div>
                    {filteredStudents.map((student: IStudent, index: number) => (
                        <StudentSnippet key={index} {...student} />
                    ))}
                </div>
            ) : <Loader/>}
        </StudentsContext.Consumer>
    );
}