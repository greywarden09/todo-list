import TagModel from "../model/TagModel";
import {createSlice, Draft, PayloadAction, Slice} from "@reduxjs/toolkit";
import {AppDispatch} from "../store";
import api from "../http";
import {AxiosResponse} from "axios";

export interface TagsState {
    tags: TagModel[]
}

const initialState: TagsState = {
    tags: []
}

const tagsSlice: Slice<TagsState> = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        fetchTagsSuccess: (state: Draft<TagsState>, action: PayloadAction<TagModel[]>) => {
            state.tags = action.payload;
        }
    }
});

export const {fetchTagsSuccess} = tagsSlice.actions;

export const fetchTags = () => (dispatch: AppDispatch) => {
    api.get('/tags')
        .then((response: AxiosResponse<TagModel[]>) => dispatch(fetchTagsSuccess(response.data)));
}

export const deleteTag = (tagId: string) => (dispatch: AppDispatch) => {
    api.delete(`/tags/${tagId}`)
        .then(() =>
            api.get('/tags')
                .then((response: AxiosResponse<TagModel[]>) => dispatch(fetchTagsSuccess(response.data))));
}

export default tagsSlice.reducer;
