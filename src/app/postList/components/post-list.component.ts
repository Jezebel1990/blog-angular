import { Component, OnInit } from '@angular/core';

import { PostListSevice } from '../services/post-list.service';


@Component({
    selector: 'blogangular',
    templateUrl: './../components/post-list.component.html',
    styleUrls: ['./../components/post-list.component.css']
})

export class PostListComponent implements OnInit {
 constructor(private postListService: PostListSevice) {}

 ngOnInit(){
this.postListService.getData().subscribe(data =>{ console.log(data);

 })
     };
 }
    
