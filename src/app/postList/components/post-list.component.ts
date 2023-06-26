import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/post-list.service';


@Component({
    selector: 'blogangular',
    templateUrl: './../components/post-list.component.html',
    styleUrls: ['./../components/post-list.component.css']
})

export class PostListComponent implements OnInit {
dados: any;
 

 constructor(private dataService: DataService) {}

 ngOnInit(){
this.dataService.getData().subscribe(data => {
    this.dados = data;
    console.log(this.dados);

 });
     
 }
}
