import { useEffect } from "react";

// Redux hooks, dispatch and actions
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectAllTasks } from "../../redux/taskSlice";
import { fetchTasks } from "../../redux/fetchTasks";

// Components
import { TaskItem } from "../TaskItem/TaskItem";
import { SpinnerWheel } from "../Spinner/Spinner";

// Interfaces, types and styles
import { Task } from "../../App";
import "./styles.css";

export const TaskList = () => {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(selectAllTasks);
    const tasksStatus = useAppSelector((state) => state.tasks.status);

    useEffect(() => {
        if (tasksStatus === "idle") {
            dispatch(fetchTasks(100));
        }
    }, [tasksStatus, dispatch]);

    return (
        <main id="task-list">
            {tasksStatus === "loading" ? (
                <SpinnerWheel />
            ) : (
                tasks.map((task: Task) => (
                    <TaskItem
                        key={task.id}
                        id={task.id}
                        task={task.task}
                        completed={task.completed}
                    />
                ))
            )}
        </main>
    );
};
