import * as React from "react";
import './footer.css';

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <p>{year}, Studio team</p>
        </div>
    );
}