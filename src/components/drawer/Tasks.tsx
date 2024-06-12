import React, {useEffect, useState} from 'react';
import {Button, Chip, Divider} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ChecklistIcon from "@mui/icons-material/Checklist";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PushPinIcon from "@mui/icons-material/PushPin";
import api from "../../http";
import {Link} from "react-router-dom";


const Tasks = () => {
    const [tasksCount, setTasksCount] = useState(0);
    const [todayTasksCount, setTodayTasksCount] = useState(0);

    useEffect(() => {
        api.get("/tasks/today")
            .then(response => {
                setTodayTasksCount(response.data.length);
            })
        api.get("/tasks/upcoming")
            .then(response => {
                setTasksCount(response.data.length);
            })
    }, []);

    return (
        <>
            <Divider textAlign='left' className='navigation-divider'>Tasks</Divider>
            <Button style={{justifyContent: 'flex-start'}}
                    variant='text'
                    startIcon={<KeyboardDoubleArrowRightIcon/>}
                    component={Link} to='/upcoming'>
                Upcoming
                <span className='space'></span>
                <Chip label={tasksCount}/>
            </Button>
            <Button style={{justifyContent: 'flex-start'}}
                    variant='text'
                    startIcon={<ChecklistIcon/>}
                    component={Link} to='/today'>
                Today
                <span className='space'></span>
                <Chip label={todayTasksCount}/>
            </Button>
            <Button style={{justifyContent: 'flex-start'}}
                    variant='text'
                    startIcon={<CalendarMonthIcon/>}
                    component={Link} to='/calendar'>
                Calendar
            </Button>
            <Button style={{justifyContent: 'flex-start'}}
                    variant='text'
                    startIcon={<PushPinIcon/>}>
                Sticky wall
            </Button>
        </>
    );
};

export default Tasks;
