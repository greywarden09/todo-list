import React, {useEffect} from 'react';
import './App.css';
import DrawerMenu, {drawerWidth} from './components/drawer/DrawerMenu';
import {AppBar, Box, CssBaseline, Toolbar, Typography} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoListCalendar from "./pages/TodoListCalendar";

function App() {
    useEffect(() => {
        document.title = "To-Do list"
    }, []);

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position='fixed'
                sx={{width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}>
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        To-Do List
                    </Typography>
                </Toolbar>
            </AppBar>
            <DrawerMenu/>
            <Box
                component='main'
                sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}>
                <Toolbar/>
                <Routes>
                    <Route path='/calendar' element={<TodoListCalendar/>}/>
                </Routes>
            </Box>
        </Box>
    );
}

export default App;
