import React from 'react';
import {Chip, Divider, Stack} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Tags = () => {
    return (
        <>
            <Divider textAlign='left' className='navigation-divider'>Tags</Divider>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip icon={<AddIcon/>} label='Add Tag' onClick={() => {
                }}/>
            </Stack>
        </>
    );
}

export default Tags;
