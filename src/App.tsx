import React, {useEffect} from 'react';
import './App.css';
import DrawerMenu, {drawerWidth} from './components/drawer/DrawerMenu';
import {AppBar, Box, CssBaseline, Toolbar, Typography} from "@mui/material";

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
                <DrawerMenu/>
            </AppBar>
        </Box>
    );
}

export default App;
