import * as React from "react";
import { User } from "../user/User";
import { Menu } from "../menu/Menu";
import './header.css';

export function Header() { 
    return (
        <div className="header">
            <Menu />
            <a href = '/'> 
                <p>Studio name</p>
            </a>
            <User />
        </div>
    );
}