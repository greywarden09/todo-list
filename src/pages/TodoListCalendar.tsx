import React, {useState} from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {Card, CardContent} from "@mui/material";

const TodoListCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <>
            <Card>
                <CardContent>
                    <Calendar onChange={(event: any) => setDate(event)}/>
                </CardContent>
            </Card>
        </>
    );
}

export default TodoListCalendar;
