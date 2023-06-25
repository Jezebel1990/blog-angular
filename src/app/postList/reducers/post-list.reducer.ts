import * as fromData from "./../actions/post-list.actions";

export interface DataState {
    items: string[];
    loading: boolean;
    error: any;
};


export const initialState: DataState = {
   items: [],
   loading: false,
   error: null,
};

export type ActionsUnion = fromData.LoadDataBegin | fromData.LoadDataSuccess | fromData.LoadDataFailure;

export function reducer(state: DataState = initialState, action: ActionsUnion): DataState {
    switch (action.type) {
        case fromData.PostListActions.LoadDataBegin: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
   case fromData.PostListActions.LoadDataSuccess: {
    return {
        ...state,
        loading: false,
        items: action.payload.data,
    };
   }
   case fromData.PostListActions.LoadDataFailure: {
    return{
        ...state,
        loading: false,
        error: action.payload.error,
    };
   }

default: {
    return state;
}
    }
}
export const getItems = (state: DataState) => state.items;
    