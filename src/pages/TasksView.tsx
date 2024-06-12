import React, {useEffect, useState} from "react";
import {Card, Checkbox, Fab, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TaskModel from "../model/TaskModel";
import api from "../http";
import {AxiosResponse} from "axios";

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

const TasksView = (props: TasksViewProps) => {
    const [tasks, setTasks] = useState([] as TaskModel[]);

    useEffect(() => {
        api.get(props.viewType === ViewType.TODAY ? "/tasks/today" : "/tasks/upcoming")
            .then((response: AxiosResponse<TaskModel[]>) => {
                setTasks(response.data);
            })
    }, [props.viewType]);

    return (
        <>
            <Card>
                <List>
                    {tasks.map((task) => {
                        return (
                            <ListItem
                                key={task.id}
                                disablePadding>
                                <ListItemButton role={undefined} dense>
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
            <Fab color="primary" sx={fabStyle}>
                <AddIcon/>
            </Fab>
        </>
    );
}

export default TasksView;
