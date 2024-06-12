import React, {useEffect, useState} from 'react';
import {Card} from "@mui/material";
import TaskModel from "../../model/TaskModel";
import api from "../../http";
import {AxiosResponse} from "axios";
import TagModel from "../../model/TagModel";
import TasksListModel from "../../model/TasksListModel";

export interface TasksPreviewProps {
    taskId: string
}

const TaskPreview = (props: TasksPreviewProps) => {
    const [task, setTask] = useState(null as unknown as TaskModel);
    const [tags, setTags] = useState([] as TagModel[]);
    const [list, setList] = useState(null as unknown as TasksListModel);

    useEffect(() => {
        api.get(`/tasks/${props.taskId}`)
            .then((response: AxiosResponse<TaskModel>) => {
                setTask(response.data)
            })
            .then(() => {
                api.get(`/tasks/${props.taskId}/tags`)
                    .then((response: AxiosResponse<TagModel[]>) => {
                        setTags(response.data);
                    })
            })
            .then(() => {
                api.get(`/tasks/${props.taskId}/list`)
                    .then((response: AxiosResponse<TasksListModel>) => {
                        setList(response.data);
                    })
            })
    }, [props.taskId]);

    return (
        <Card>

        </Card>
    );
};

export default TaskPreview;
