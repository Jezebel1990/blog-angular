import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { delay, map, mergeMap, catchError } from "rxjs/operators";
import { PostListSevice } from "../services/post-list.service";
import * as  PostListActions from '../actions/post-list.actions';


@Injectable()
export class PostListEffects {
    loadPosts$ = createEffect(() =>
    this.actions$.pipe(
        ofType(PostListActions.loadPostList),
        mergeMap(() =>
        this.postListService.getPostsFakeCall().pipe(
            delay(2000),
            map(posts => PostListActions.loadPostListSuccess({ posts })
                ),
            catchError(error => of(PostListActions.loadPostListFailure({ error})))
        )
        )
    )
    
    );

    constructor(
        private actions$: Actions,
        private postListService: PostListSevice
    ) {}

}