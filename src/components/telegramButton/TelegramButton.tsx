import * as React from "react";
import './telegramButton.css';

export function TelegramButton({telegram}: {telegram: string}) {
    const link = "https://www.t.me/" + telegram;
    return (
        <div className="telegramButton">
            <a href={link}>
                <img className="telegramIcon" src= './telegram.png'/>
            </a>
        </div>
    );
}