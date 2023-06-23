import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadData } from '../actions/post-list.actions';
import { selectData } from '../store/post-list.store';

@Component({
    selector: 'blogangular',
    templateUrl: './../components/post-list.component.html',
    styleUrls: ['./../components/post-list.component.css']
})

export class PostListComponent implements OnInit {
    data!: Observable<{id: string, title: string}[]> ;

 constructor(private store: Store) {}

 ngOnInit():void {

  this.data = this.store.select(selectData);

//   this.store.dispatch(loadData());
     };
 }
    
