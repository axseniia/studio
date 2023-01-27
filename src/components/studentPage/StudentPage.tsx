import * as React from "react";
import { StudentsContext } from "../../context/context";
import { StudentContacts } from './studentContacts/StudentContacts';
import { Loader } from "../common/loader/Loader";

import { StudentList } from "../../interfaces/interfaces";

import "./StudentPage.css";

//TODO: убрать хардкод студента
export function StudentPage() {
    return (
        <StudentsContext.Consumer>
            {({filteredStudents} : {filteredStudents: StudentList}) => filteredStudents.length ? (
                <div className="studentPage">
                    <div className="studentGeneralInfo">
                        <img className='studentPhoto' src={filteredStudents[0].avatarUrl}/>
                        <div>
                            <div className='studentName'>{filteredStudents[0].name} {filteredStudents[0].surname}</div>
                            <StudentContacts phone={filteredStudents[0].phone} />
                        </div>
                    </div>
                    <div className="studentGroups">
                    </div>
                </div>
            ) : <Loader/>}
        </StudentsContext.Consumer>
    );
}