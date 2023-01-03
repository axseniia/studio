import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StudentSnippet } from "./components/StudentSnippet";
import { IStudent } from './interfaces/interfaces';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StudentSnippet {...{ name: "John", email: "ddd"}} />);
