import React, {useEffect, useState} from 'react';
import {Button, Divider} from "@mui/material";
import api from "../../http";

const Lists = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        api.get("/lists")
            .then(response => {
                setLists(response.data.sort());
            })
    }, []);

    const renderLists = () => {
        return lists.map(list => {
            return <Button variant='text' style={{justifyContent: 'flex-start'}}>{list}</Button>
        })
    }

    return (
        <>
            <Divider textAlign='left' className='navigation-divider'>Lists</Divider>
            {renderLists()}
        </>
    );
};

export default Lists;
