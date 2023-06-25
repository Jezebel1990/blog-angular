
import { PostListSevice } from "../services/post-list.service";
import * as  PostListActions from '../actions/post-list.actions';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import * as DataActions from "./../actions/post-list.actions";
import { of } from "rxjs";

@Injectable()
export class PostListEffects {
  constructor(private actions: Actions, private postListService: PostListSevice) {}

@Effect()

    loadData = this.actions.pipe(
        ofType(DataActions.PostListActions.LoadDataBegin),
        switchMap(() => {
         return this.postListService.loadData().pipe(
        map(data => new DataActions.LoadDataSuccess
         ({data: data})),
         catchError(error =>
            of(new DataActions.LoadDataFailure
                ({ error: error }))
            )
         );
            })
);
        }