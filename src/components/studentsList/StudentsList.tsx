import * as React from "react";
import { StudentSnippet } from "../studentSnippet/StudentSnippet";
import { IStudent, StudentList } from "../../interfaces/interfaces";
import { SearchInput } from "../searchInput/SearchInput";
import './studentsList.css';

export function StudentsList({students}: {students: StudentList}) {
    return (
        <div className="studentsList">
            <SearchInput/>
            <div className='studentsCounter'>150 students</div>
            {students.map((student: IStudent, index: number) => (
                <StudentSnippet key={index} {...student} />
            ))}
        </div>
    );
}