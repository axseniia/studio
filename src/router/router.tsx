import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { StudentsList } from "../components/studentsListPage/studentsList/StudentsList";
import { StudentPage } from "../components/studentPage/StudentPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <StudentsList/>,
        children: [],
    },
    {
        path: "user/:userId",
        element: <StudentPage/>,
    },
]);