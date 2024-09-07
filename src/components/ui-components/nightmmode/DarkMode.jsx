import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    // Use state to track dark mode status
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Set dark mode or light mode based on the toggle
    const toggleDarkMode = (e) => {
        if (e.target.checked) {
            document.body.setAttribute("data-theme", "dark");
            setIsDarkMode(true);
        } else {
            document.body.setAttribute("data-theme", "light");
            setIsDarkMode(false);
        }
    };

    // UseEffect to persist the mode on refresh (optional)
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.setAttribute("data-theme", "dark");
            setIsDarkMode(true);
        }
    }, []);

    // Save to localStorage (optional)
    useEffect(() => {
        if (isDarkMode) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    return (
        <div className="dark_mode">
            <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                checked={isDarkMode}
                onChange={toggleDarkMode} // Handle the checkbox change event
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
