import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { StudentsListPage } from "../components/studentsListPage/studentsListPage";
import { StudentPage } from "../components/studentPage/StudentPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <StudentsListPage/>,
        children: [],
    },
    {
        path: "user/:id",
        element: <StudentPage/>,
    },
    {
        path: "*",
        element: <div>404</div>,
    }
]);