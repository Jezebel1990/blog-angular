import { Action } from "@ngrx/store";


export interface DataState {
    items: string[];
    loading: boolean;
    error: any;
};



export enum PostListActions {
    LoadDataBegin = "[Data] Load data begin",
    LoadDataSuccess = "[Data] Load data success",
    LoadDataFailure = "[Data] Load data failure",
}

export class LoadDataBegin implements Action {
    readonly type = PostListActions.LoadDataBegin;
}

export class LoadDataSuccess implements Action {
    readonly type = PostListActions.LoadDataSuccess;

    constructor(public payload: { data: any }) {}
}

export class LoadDataFailure implements Action {
    readonly type = PostListActions.LoadDataFailure;
 constructor(public payload: { error: any}) {}
    
}

export type ActionsUnion = LoadDataBegin | LoadDataSuccess | LoadDataFailure;