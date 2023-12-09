// React state
import { useState } from "react";

// Redux hooks, dispatch and actions
import { useAppDispatch } from "../../redux/hooks";
import { deleteTask, editTask, toggleComplete } from "../../redux/taskSlice";

// Components
import { Col, FormCheck, FormControl, Stack } from "react-bootstrap";
import { IconButton } from "../IconButton/IconButton";

// Interfaces, types and styles
import { TaskInterface } from "../../App";
import "./styles.css";

export const TaskItem = ({ id, task, completed }: TaskInterface) => {
    const dispatch = useAppDispatch();
    const [editMode, setEditMode] = useState(false);
    const [editedTaskText, setEditedTaskText] = useState(task);

    const handleTaskCompleted = () => {
        dispatch(
            toggleComplete({
                id: id,
                completed: !completed,
            })
        );
    };

    const handleTaskDelete = () => {
        dispatch(
            deleteTask({
                editedTask: {
                    id: id,
                    task: editedTaskText,
                    completed: completed,
                },
            })
        );
    };

    const handleTaskEdit = () => {
        dispatch(
            editTask({
                editedTask: {
                    id: id,
                    task: editedTaskText,
                    completed: completed,
                },
            })
        );
    };

    return (
        <Stack direction="horizontal" className="task">
            <FormCheck
                inline
                type="checkbox"
                defaultChecked={completed}
                id={id.toString()}
                onChange={handleTaskCompleted}
            />
            {editMode ? (
                <>
                    <FormControl
                        value={editedTaskText}
                        onChange={(e) => {
                            setEditedTaskText(e.target.value);
                            console.log(e.target.value);
                        }}
                    />
                    <IconButton
                        iconName={"save"}
                        handleOnClick={() => {
                            handleTaskEdit();
                            setEditMode(false);
                        }}
                    />
                </>
            ) : (
                <>
                    <Col>{task}</Col>
                    <IconButton
                        iconName={"edit"}
                        handleOnClick={() => setEditMode(true)}
                    />
                </>
            )}
            <IconButton iconName={"delete"} handleOnClick={handleTaskDelete} />
        </Stack>
    );
};

// import React from "react";
// import { useState } from "react";
// import { FormControl, Stack, Col } from "react-bootstrap";
// import { IconButton } from "../IconButton/IconButton";

// export const IncomeItem = () => {
//     const [editMode, setEditMode] = useState(false);
//     const [editNoteText, setEditNoteText] = useState();
//     return (
//         <Stack direction="horizontal" className="note">
//             {editMode ? (
//                 <>
//                     <FormControl
//                         value={editNoteText}
//                         onChange={(e) => {
//                             setEditNoteText(e.target.value);
//                             console.log(e.target.value);
//                         }}
//                     />
//                     <FormControl
//                         value={editNoteText}
//                         onChange={(e) => {
//                             setEditNoteText(e.target.value);
//                             console.log(e.target.value);
//                         }}
//                     />
//                     <FormControl
//                         value={editNoteText}
//                         onChange={(e) => {
//                             setEditNoteText(e.target.value);
//                             console.log(e.target.value);
//                         }}
//                     />
//                     x
//                     <IconButton
//                         iconName={"save"}
//                         handleOnClick={() => {
//                             console.log("Save Clicked");
//                         }}
//                     />
//                 </>
//             ) : (
//                 <>
//                     <Col>text</Col>
//                     <IconButton
//                         iconName={"edit"}
//                         handleOnClick={() => setEditMode(true)}
//                     />
//                 </>
//             )}
//             <IconButton
//                 iconName={"delete"}
//                 handleOnClick={() => {
//                     console.log("Delete Clicked");
//                 }}
//             />
//         </Stack>
//     );
// };
