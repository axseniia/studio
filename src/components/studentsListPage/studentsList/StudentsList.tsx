import * as React from "react";
import { StudentSnippet } from "../studentSnippet/StudentSnippet";
import { Loader } from "../../common/loader/Loader";

import { IStudent, StudentList } from "../../../interfaces/interfaces";
import { StudentsContext } from "../../../context/context";
import './studentsList.css';

export function StudentsList() {
    return (
        <StudentsContext.Consumer>
            {({filteredStudents }: { filteredStudents: StudentList }) => filteredStudents ? (
                <div className="studentsList">
                    <div className='studentsCounter'>{filteredStudents.length} students</div>
                    {filteredStudents.map((student: IStudent, index: number) => (
                        <StudentSnippet key={student.id} {...student} />
                    ))}
                </div>
            ) : <Loader/>}
        </StudentsContext.Consumer>
    );
}