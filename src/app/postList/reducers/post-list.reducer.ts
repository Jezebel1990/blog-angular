import {createReducer, on} from '@ngrx/store';
import * as PostListActions from '../actions/post-list.actions';

export interface PostListState {
    data: any;
    error: any;
}

export const initialState: PostListState = {
   data: null,
   error: null
};

export const postListReducer = createReducer(
    initialState,
    on(PostListActions.loadDataSuccess, (state, { data }) => ({ 
        ...state,
         data, 
         error: null
        })),
    on(PostListActions.loadDataFailure, (state, { error }) => ({ 
        ...state, 
        data: null, 
        error
    }))
);