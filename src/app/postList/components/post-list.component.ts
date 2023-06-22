import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostList } from '../models/post-list.model';
import * as PostListActions from './../actions/post-list.actions';



@Component({
    selector: 'blogangular',
    templateUrl: './../components/post-list.component.html',
    styleUrls: ['./../components/post-list.component.css']
})

export class PostListComponent implements OnInit {
    posts$!: Observable<PostList[]>;
    loading$!: Observable<boolean>;
    error$!: Observable<any>;

    constructor(private store: Store<{ posts: PostList[]; loading: boolean, error: any}>) {}

    ngOnInit(){
       this.posts$ = this.store.pipe(select(state => state.posts));
       this.loading$ = this.store.pipe(select(state => state.loading));
       this.error$ = this.store.pipe(select(state => state.error));
        this.store.dispatch(PostListActions.loadPostList());  
    }
}