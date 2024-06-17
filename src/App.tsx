import React, {useEffect} from 'react';
import './App.css';
import DrawerMenu, {drawerWidth} from './components/drawer/DrawerMenu';
import {AppBar, Box, CssBaseline, Toolbar, Typography} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import TodoListCalendar from "./pages/TodoListCalendar";
import TasksView, {ViewType} from "./pages/TasksView";
import {Provider, useDispatch} from "react-redux";
import {AppDispatch, store} from "./store";
import {fetchTodayTasks, fetchUpcomingTasks} from "./data/tasksSlice";

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

function App() {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodayTasks());
        dispatch(fetchUpcomingTasks());
    }, [dispatch]);

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
                    <Route path='/today' element={<TasksView viewType={ViewType.TODAY}/>}/>
                    <Route path='/upcoming' element={<TasksView viewType={ViewType.UPCOMING}/>}/>
                </Routes>
            </Box>
        </Box>
    );
}

export default AppWrapper;
