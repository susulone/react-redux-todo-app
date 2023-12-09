// Components
import { Layers } from "react-feather";
import { SearchTask } from "../SearchTask/SearchTask";

// Interfaces, types and styles
import "./styles.css";

export const Header = () => {
    return (
        <header id="header">
            <section id="logo-wrapper">
                <Layers />
                <h6>Taskify</h6>
            </section>
            <SearchTask />
        </header>
    );
};

// export const Header = ({ searchQuery }: SearchProps) => {
//     console.log("Render Header");
//     return (
//         <nav className="header">
//             <div className="logo-wrapper">
//                 <FiBox className="app-logo" />
//                 <h1 className="app-name">TO DO:</h1>
//             </div>
//             <SearchTodo
//                 searchQuery={searchQuery}
//                 // setSearchQuery={setSearchQuery}
//             />
//         </nav>
//     );
// };
