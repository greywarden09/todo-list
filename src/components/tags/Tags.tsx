import React, {useEffect} from 'react';
import {Chip, Divider, Stack} from "@mui/material";
import parse from 'color-parse';
import {lightenColor} from "../common/ColorConverter";
import {AppDispatch, RootState} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {deleteTag, fetchTags} from "../../data/tagsSlice";

const Tags = () => {
    const dispatch: AppDispatch = useDispatch();

    const {tags} = useSelector((state: RootState) => state.tags);

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    const handleDelete = (tagId: string) => {
        dispatch(deleteTag(tagId));
    }

    const calculateTextColor = (backgroundColor: string) => {
        const color = parse(backgroundColor); // #102f3c
        const yiq = ((color.values[0] * 299) + (color.values[1] * 587) + (color.values[2] * 114)) / 1000;

        return yiq >= 128 ? "#000" : "#fff";
    }

    const renderTags = () => {
        return tags.map(tag => {
            const backgroundColor: string = tag.color;
            return (
                <>
                    <Chip
                        variant={"outlined"}
                        label={tag.name}
                        style={{
                            backgroundColor: backgroundColor,
                            color: calculateTextColor(backgroundColor),
                            marginInlineEnd: "1em",
                        }}
                        sx={{
                            '& .MuiChip-deleteIcon': {
                                color: lightenColor(backgroundColor, 0.6)
                            },
                            '& .MuiChip-deleteIcon:hover': {
                                color: lightenColor(backgroundColor, 0.3)
                            }
                        }}
                        onDelete={() => handleDelete(tag.id)}
                    />
                </>
            );
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
