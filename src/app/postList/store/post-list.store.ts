import {ActionReducerMap} from '@ngrx/store';
import { createFeatureSelector, createSelector, StoreModule } from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';

import { PostListState, postListReducer } from '../reducers/post-list.reducer';
import { PostListEffects } from '../effects/post-list.effects';

export interface PostState {
 data: PostListState;
}

export const reducers: ActionReducerMap<PostState> = {
    data: postListReducer,
};

export const selectDataState = createFeatureSelector<PostListState>('data');
export const selectData = createSelector(selectDataState, state => state.data)
export const selectDataError = createSelector(selectDataState, state => state.error)


export const effects = [PostListEffects];

export const PostListStore = [
    StoreModule.forFeature('dataStore', reducers),
    EffectsModule.forFeature(effects),
]