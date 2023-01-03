import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StudentsList } from "./components/studentsList/StudentsList";
import { listOfStudents } from "./data";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StudentsList students = {listOfStudents}/>);
