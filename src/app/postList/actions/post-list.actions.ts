import {createAction, props} from "@ngrx/store";

export const loadData = createAction('[Data] Load PostList');
export const loadDataSuccess = createAction('[Data] Load Data Success', 
props<{ data: any }>()
);
export const loadDataFailure = createAction(
    '[Data] Load Posts Failure', 
    props<{ error: any }>());


