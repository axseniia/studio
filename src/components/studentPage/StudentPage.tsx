import * as React from "react";
import { useParams } from "react-router-dom";
import { StudentContacts } from './studentContacts/StudentContacts';
import { Loader } from "../common/loader/Loader";

import { IStudent } from "../../interfaces/interfaces";
import { endPoints } from '../../utils/endPoints';

import "./StudentPage.css";

export function StudentPage() {
    const { id } = useParams();
    const [student, setStudent] = React.useState({} as IStudent);

    React.useEffect(() => {
        fetch(endPoints.studentURL(id))
            .then(response => response.json())
            .then(data => {
                setStudent(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });;       
    },[]);
    const component = (
        <div className="studentPage">
            <div className="studentGeneralInfo">
                <img className='studentPhoto' src={student.avatarUrl}/>
                <div>
                    <div className='studentName'>{student.name} {student.surname}</div>
                    <StudentContacts phone={student.phone} />
                </div>
            </div>
            <div className="studentGroups">
            </div>
        </div>);

    return student.name ? component : <Loader />;
}