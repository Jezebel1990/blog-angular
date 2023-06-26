import { Component } from '@angular/core';
import { DataService } from './postList/services/post-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private datService: DataService) {
  this.datService.load();
 }


}
