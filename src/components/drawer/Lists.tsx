import React from 'react';
import {Button, Divider} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Lists = () => (
    <>
        <Divider textAlign='left' className='navigation-divider'>Lists</Divider>
        <Button style={{justifyContent: 'flex-start'}}
                variant='text'
                startIcon={<AddIcon/>}>
            Add new list
        </Button>
    </>
);

export default Lists;
