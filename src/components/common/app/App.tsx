import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

import { router } from "../../../router/router";

import './app.css';

export function App() {
    return (
        <div>
            <Header/>
            <RouterProvider router={router} />
            <Footer/>
        </div>

    );
}