import React, {useState} from 'react';
import {Button, Chip, Divider} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ChecklistIcon from "@mui/icons-material/Checklist";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PushPinIcon from "@mui/icons-material/PushPin";


const Tasks = () => {
    const [tasksCount, setTasksCount] = useState(100);
    const [todayTasksCount, setTodayTasksCount] = useState(100);

    return (
        <>
            <Divider textAlign='left' className='navigation-divider'>Tasks</Divider>
            <Button style={{justifyContent: 'flex-start'}}
                    variant='text'
                    startIcon={<KeyboardDoubleArrowRightIcon/>}>
                Upcoming
                <span className='space'></span>
                <Chip label={tasksCount}/>
            </Button>
            <Button style={{justifyContent: 'flex-start'}}
                    variant='text'
                    startIcon={<ChecklistIcon/>}>
                Today
                <span className='space'></span>
                <Chip label={todayTasksCount}/>
            </Button>
            <Button style={{justifyContent: 'flex-start'}}
                    variant='text'
                    startIcon={<CalendarMonthIcon/>}>
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
