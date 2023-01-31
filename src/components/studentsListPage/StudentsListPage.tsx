import * as React from "react";
import { StudentsFilters } from "../studentsFilterComponents/studentsFilters/StudentsFilters";
import { StudentsList } from "./studentsList/StudentsList";

import { endPoints } from '../../utils/endPoints';

export function StudentsListPage() {
    return (
        <div className="studentsList">
            <StudentsFilters/>
            <StudentsList/>
        </div>
    );
}