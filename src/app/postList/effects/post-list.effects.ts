import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { delay, map, mergeMap, catchError } from "rxjs/operators";
import { PostListSevice } from "../services/post-list.service";
import * as  PostListActions from '../actions/post-list.actions';


@Injectable()
export class PostListEffects {
    loadData$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PostListActions.loadData),
        mergeMap(() =>
        this.postListService.getJSONData().pipe(
            delay(2000),
            map((data) => PostListActions.loadDataSuccess ({ data })
                ),
            catchError((error) => of(PostListActions.loadDataFailure({ error})))
        )
        )
    )
    
    );

    constructor(
        private actions$: Actions,
        private postListService: PostListSevice
    ) {}

}