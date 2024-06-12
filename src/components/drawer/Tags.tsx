import React, {useEffect, useState} from 'react';
import {Chip, Divider, Stack} from "@mui/material";
import api from "../../http";
import {AxiosResponse} from "axios";
import TagModel from "../../model/TagModel";

const Tags = () => {
    const [tags, setTags] = useState([] as TagModel[]);

    useEffect(() => {
        api.get('/tags')
            .then((response: AxiosResponse<TagModel[]>) => {
                setTags(response.data.sort());
            })
    }, []);

    const renderTags = () => {
        return tags.map(tag => {
            return <Chip label={tag.name} style={{backgroundColor: `${tag.color}`}}/>
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
