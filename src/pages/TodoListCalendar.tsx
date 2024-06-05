import React from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {Card, CardContent} from "@mui/material";

const TodoListCalendar = () => {
    return (
        <Card>
            <CardContent>
                <Calendar/>
            </CardContent>
        </Card>

    );
}

export default TodoListCalendar;
