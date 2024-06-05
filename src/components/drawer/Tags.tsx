import React, {useEffect, useState} from 'react';
import {Chip, Divider, Stack} from "@mui/material";
import api from "../../http";

const Tags = () => {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        api.get('/tasks/tags')
            .then(response => {
                setTags(response.data.sort());
            })
    }, []);

    const renderTags = () => {
        return tags.map(tag => {
            return <Chip label={tag}/>
        });
    }

    return (
        <>
            <Divider textAlign='left' className='navigation-divider'>Tags</Divider>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {
                    renderTags()
                }
            </Stack>
        </>
    );
}

export default Tags;
