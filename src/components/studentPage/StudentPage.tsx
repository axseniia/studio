import * as React from "react";
import { StudentsContext } from "../../context/context";
import { StudentContacts } from './studentContacts/StudentContacts';

import { StudentList } from "../../interfaces/interfaces";

import "./StudentPage.css";

//TODO: убрать хардкод студента
export function StudentPage() {
    return (
        <StudentsContext.Consumer>
            {({filteredStudents} : {filteredStudents: StudentList}) => filteredStudents.length ? (
                <div className="studentPage">
                    <div className="studentGeneralInfo">
                        <img className='studentPhoto' src={filteredStudents[5].avatarUrl}/>
                        <div>
                            <div className='studentName'>{filteredStudents[5].name} {filteredStudents[5].surname}</div>
                            <StudentContacts phone={filteredStudents[5].phone} />
                        </div>
                    </div>
                    <div className="studentGroups">
                    </div>
                </div>
            ) : null}
        </StudentsContext.Consumer>
    );
}