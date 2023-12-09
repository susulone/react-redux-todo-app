// Redux hooks, dispatch and actions
import { useAppSelector } from "./redux/hooks";
import { selectError } from "./redux/taskSlice";

// Components
import { Container } from "react-bootstrap";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { TaskList } from "./components/TaskList/TaskList";

// Interfaces, types and styles
import "./App.css";

export type Task = {
    id: string | number;
    task: string;
    completed: boolean;
};

function App() {
    const error: string | null = useAppSelector(selectError);
    return (
        <Container fluid>
            <Header />
            {error === null ? <TaskList /> : <p>{error}</p>}
            <Footer />
        </Container>
    );
}

export default App;
