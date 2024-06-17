import React, {useState} from "react";
import {Button, Card, CardActions, CardContent, Grid, Modal, TextField, Typography} from "@mui/material";
import DatePicker from "react-datepicker";
import {AppDispatch} from "../../store";
import {useDispatch} from "react-redux";
import {createTask} from "../../data/tasksSlice";

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

export interface CreateTaskDialogProps {
    open: boolean,
    handleClose: () => void
}

const CreateTaskDialog = (props: CreateTaskDialogProps) => {
    const dispatch: AppDispatch = useDispatch();

    const [title, setTitle] = useState(undefined as unknown as string);
    const [description, setDescription] = useState(undefined as unknown as string);
    const [dueDate, setDueDate] = useState(new Date());

    const titleRow = () => <Grid item xs={12}>
        <TextField label='Title' onChange={event => setTitle(event.target.value)}/>
    </Grid>;

    const descriptionRow = () => <>
        <Grid item xs={12}>
            <TextField label='Description' onChange={event => setDescription(event.target.value)}/>
        </Grid>
    </>;

    const handleSave = () => {
        dispatch(createTask(title, description, dueDate));
        props.handleClose();
    }

    return (
        <Modal open={props.open}
               onClose={props.handleClose}>
            <Card sx={modalStyle}>
                <CardContent>
                    <Typography gutterBottom>
                        Create new task
                    </Typography>
                    <Grid container spacing={2}>
                        {titleRow()}
                        {descriptionRow()}
                        <Grid item xs={4}>
                            <Typography>Due date</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <DatePicker selected={dueDate} timeInputLabel='Due date' onChange={date => setDueDate(date as Date)}/>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button size='small' onClick={props.handleClose}>Cancel</Button>
                    <Button size='small' disabled={!title} onClick={handleSave}>Save</Button>
                </CardActions>
            </Card>
        </Modal>
    );
}

export default CreateTaskDialog;
