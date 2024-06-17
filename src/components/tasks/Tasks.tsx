import React from 'react';
import {Button, Chip, Divider} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ChecklistIcon from "@mui/icons-material/Checklist";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PushPinIcon from "@mui/icons-material/PushPin";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const Tasks = () => {
    const {todayTasks, upcomingTasks} = useSelector((state: RootState) => state.tasks);

    return (
        <>
            <Divider textAlign='left' className='navigation-divider'>Tasks</Divider>
            <Button style={{justifyContent: 'flex-start'}}
                    variant='text'
                    startIcon={<KeyboardDoubleArrowRightIcon/>}
                    component={Link} to='/upcoming'>
                Upcoming
                <span className='space'></span>
                <Chip label={upcomingTasks.length}/>
            </Button>
            <Button style={{justifyContent: 'flex-start'}}
                    variant='text'
                    startIcon={<ChecklistIcon/>}
                    component={Link} to='/today'>
                Today
                <span className='space'></span>
                <Chip label={todayTasks.length}/>
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
