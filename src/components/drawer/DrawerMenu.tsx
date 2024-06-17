import React from 'react';
import {Drawer, Toolbar} from "@mui/material";
import './DrawerMenu.css';
import Tasks from "../tasks/Tasks";
import Lists from "../lists/Lists";
import Tags from "../tags/Tags";

export const drawerWidth: number = 360;

const DrawerMenu = () => (
    <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                paddingLeft: 5,
                paddingRight: 5
            },
        }}
        variant="permanent"
        anchor="left"
    >
        <Toolbar/>
        <Tasks/>
        <Tags/>

    </Drawer>
);

export default DrawerMenu;
