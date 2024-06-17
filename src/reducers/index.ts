import {combineReducers} from "@reduxjs/toolkit";
import tasksReducer from '../data/tasksSlice'
import tagsReducer from '../data/tagsSlice';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    tags: tagsReducer
});

export default rootReducer;
