// Components
import { AddTask } from "../AddTask/AddTask";

// Interfaces, types and styles
import "./styles.css";

export const Footer = () => {
    const projectLifeTime = (): string => {
        const projectCreated = new Date("2023-11-20");
        const creationYear = projectCreated.getFullYear();

        const currentYear = new Date().getFullYear();

        if (creationYear !== currentYear) {
            return `${creationYear}–${currentYear}`;
        } else {
            return `${creationYear}`;
        }
    };

    return (
        <footer className="footer">
            <AddTask />
            <p id="footer-content">
                Copyright <span>&copy; </span>
                {projectLifeTime()} Taskify
            </p>
        </footer>
    );
};
