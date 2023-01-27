import * as React from "react";
import { StudentsContext } from "../../context/context";
import { StudentContacts } from './studentContacts/StudentContacts';

import { StudentList } from "../../interfaces/interfaces";

import "./StudentPage.css";

//TODO: убрать хардкод студента
export function StudentPage() {
    return (
        <StudentsContext.Consumer>
            {({students} : {students: StudentList}) => students.length ? (
                <div className="studentPage">
                    <div className="studentGeneralInfo">
                        <img className='studentPhoto' src={students[5].avatarUrl}/>
                        <div>
                            <div className='studentName'>{students[5].name} {students[5].surname}</div>
                            <StudentContacts phone={students[5].phone} />
                        </div>
                    </div>
                    <div className="studentGroups">
                    </div>
                </div>
            ) : null}
        </StudentsContext.Consumer>
    );
}