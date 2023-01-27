import * as React from "react";
import { StudentsFilters } from "../studentsFilterComponents/studentsFilters/StudentsFilters";
import { StudentsList } from "./studentsList/StudentsList";

export function StudentsListPage() {
    return (
        <div className="studentsList">
            <StudentsFilters/>
            <StudentsList/>
        </div>
    );
}