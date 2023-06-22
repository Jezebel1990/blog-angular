import {createReducer, on} from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { PostList } from '../models/post-list.model';
import * as PostListActions from '../actions/post-list.actions';

export interface PostListState extends EntityState<PostList>{
    loading: boolean;
    error: any;
}

export const postAdapter = createEntityAdapter<PostList>();

export const initialState: PostListState = postAdapter.getInitialState({
    loading: false,
    error: null
});

export const postListReducer = createReducer(
    initialState,
    on(PostListActions.loadPostListSuccess, (state, { posts }) => postAdapter.setAll(posts, { ...state, posts, loading: false})),
    on(PostListActions.loadPostListFailure, (state, { error}) => postAdapter.setAll( error, { ...state, loading: false, error }))
);