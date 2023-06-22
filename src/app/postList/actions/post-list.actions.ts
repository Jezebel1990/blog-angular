import {createAction, props} from "@ngrx/store";
import { PostList } from "../models/post-list.model";

export const loadPostList = createAction('[Post] Load PostList');
export const loadPostListSuccess = createAction(
 '[Post] Load Posts Success',
 props<{ posts: PostList[]}>()
);
export const loadPostListFailure = createAction('[Post] Load Posts Failure', props<{ error: any }>());


