
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";

import * as DataActions from "./../actions/post-list.actions";
import { of } from "rxjs";
import { DataService } from "../services/post-list.service";

@Injectable()
export class DataEffects {
  constructor(private actions: Actions, private dataService: DataService) {}

@Effect()
    loadData = this.actions.pipe(
        ofType(DataActions.ActionTypes.LoadDataBegin),
        switchMap(() => {
         return this.dataService.loadData().pipe(
        map(data => new DataActions.LoadDataSuccess
         ({ data: data })),
         catchError(error =>
            of(new DataActions.LoadDataFailure
                ({ error: error }))
            )
         );
            })
);
        }
      