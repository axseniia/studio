import * as React from "react";
import { User } from "../user/User";
import { Menu } from "../menu/Menu";
import './header.css';

export function Header() { 
    return (
        <div className="header">
            <Menu />
            <p>Studio name</p>
            <User />
        </div>
    );
}