import {createSlice, Draft, PayloadAction, Slice} from "@reduxjs/toolkit";
import {AppDispatch} from '../store';
import api from "../http";
import {AxiosResponse} from "axios";
import TaskModel from "../model/TaskModel";

export interface TasksState {
    upcomingTasks: TaskModel[],
    todayTasks: TaskModel[],
}

const initialState: TasksState = {
    upcomingTasks: [],
    todayTasks: [],
}

const tasksSlice: Slice<TasksState> = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        fetchUpcomingTasksSuccess: (state: Draft<TasksState>, action: PayloadAction<TaskModel[]>) => {
            state.upcomingTasks = action.payload;
        },
        fetchTodayTasksSuccess: (state: Draft<TasksState>, action: PayloadAction<TaskModel[]>) => {
            state.todayTasks = action.payload;
        }
    }
});

export const {fetchUpcomingTasksSuccess, fetchTodayTasksSuccess} = tasksSlice.actions;

export const fetchTodayTasks = () => (dispatch: AppDispatch) => {
    api.get('/tasks/today')
        .then((response: AxiosResponse<TaskModel[]>) => dispatch(fetchTodayTasksSuccess(response.data)));
}

export const fetchUpcomingTasks = () => (dispatch: AppDispatch) => {
    api.get('/tasks/upcoming')
        .then((response: AxiosResponse<TaskModel[]>) => dispatch(fetchUpcomingTasksSuccess(response.data)));
}

export const createTask = (title: string, description: string | undefined, dueDate: Date) => (dispatch: AppDispatch) => {
    api.post('/tasks', {
        title: title,
        dueDate: dueDate.toISOString().split('T')[0],
        description: description
    }).then(() => {
        api.get('/tasks/today')
            .then((response: AxiosResponse<TaskModel[]>) => dispatch(fetchTodayTasksSuccess(response.data)));
        api.get('/tasks/upcoming')
            .then((response: AxiosResponse<TaskModel[]>) => dispatch(fetchUpcomingTasksSuccess(response.data)));
    })
}


export default tasksSlice.reducer;
