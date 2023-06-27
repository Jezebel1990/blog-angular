import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/postList/services/post-list.service';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
// dados: any;


 constructor(private dataService: DataService) { }
 ngOnInit(){
  this.dataService.getData().subscribe(data => {
      // this.dados = data;
      this.dataService.load();
      console.log(data);
  
   });
       
   }

}
