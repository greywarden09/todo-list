import React, {useState} from "react";
import {
    Card,
    CardContent,
    Checkbox,
    Fab,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Modal,
    TextField,
    Typography
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TaskModel from "../model/TaskModel";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CreateTaskDialog from "../components/tasks/CreateTaskDialog";

export enum ViewType {
    TODAY,
    UPCOMING
}

export interface TasksViewProps {
    viewType: ViewType
}

const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const TasksView = (props: TasksViewProps) => {
    const [open, setOpen] = useState(false);

    const {todayTasks, upcomingTasks} = useSelector((state: RootState) => state.tasks);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <>
            <Card>
                <List>
                    {(props.viewType === ViewType.TODAY ? todayTasks : upcomingTasks).map((task: TaskModel) => {
                        return (
                            <ListItem
                                key={task.id}
                                disablePadding>
                                <ListItemButton role={undefined} dense key={task.id}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            checked={task.finished}
                                            tabIndex={-1}
                                            disableRipple/>
                                    </ListItemIcon>
                                    <ListItemText id={task.id} primary={task.title}/>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Card>
            <Fab color="primary" sx={fabStyle} onClick={handleOpen}>
                <AddIcon/>
            </Fab>
            <CreateTaskDialog open={open} handleClose={handleClose}/>
        </>
    );
}

export default TasksView;
