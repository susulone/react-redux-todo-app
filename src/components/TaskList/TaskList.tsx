// Redux hooks, dispatch and actions
import { useAppSelector } from "../../redux/hooks";

// Components
import { TaskItem } from "../TaskItem/TaskItem";

// Interfaces, types and styles
import { TaskInterface } from "../../App";
import "./styles.css";

export const TaskList = () => {
    const tasks = useAppSelector((state) => state.tasks.tasks);
    return (
        <main id="task-list">
            {tasks.map((task: TaskInterface) => (
                <TaskItem
                    id={task.id}
                    task={task.task}
                    completed={task.completed}
                />
            ))}
        </main>
    );
};
