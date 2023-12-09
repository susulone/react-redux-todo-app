// Components
import { Container } from "react-bootstrap";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { TaskList } from "./components/TaskList/TaskList";

// Interfaces, types and styles
import "./App.css";

export interface TaskInterface {
    id: string | number;
    task: string;
    completed: boolean;
}

function App() {
    return (
        <Container fluid>
            <Header />
            <TaskList />
            <Footer />
        </Container>
    );
}

export default App;
