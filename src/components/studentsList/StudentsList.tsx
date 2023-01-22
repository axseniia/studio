import * as React from "react";
import { StudentSnippet } from "../studentSnippet/StudentSnippet";
import { IStudent, StudentList } from "../../interfaces/interfaces";

export function StudentsList({students}: {students: StudentList}) {
    return (
        <div className="studentsList">
            <h1>Список учеников</h1>
            {students.map((student: IStudent, index: number) => (
                <StudentSnippet key={index} {...student} />
            ))}
        </div>
    );
}