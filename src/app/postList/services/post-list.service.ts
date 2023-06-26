import { Injectable } from '@angular/core';
import { delay }  from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppState, getDataState, getAllItems } from '../reducers';
import { Store } from "@ngrx/store";

import * as DataActions from "./../actions/post-list.actions"

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(
      private store: Store<AppState>
      ,private http: HttpClient
      ) {}


loadData() {
      return this.http.get('assets/data.json').pipe(delay(2000));
    }

// Simula uma chamada assincrona com atraso de 2 segundos 
load() {
  this.store.dispatch(new DataActions.LoadDataBegin());
}
getData() {
  return this.store.select(getDataState);
}
getItems() {
  return this.store.select(getAllItems);
}

  }
        
      