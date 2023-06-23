import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay }  from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class PostListSevice {
  
   data:  any[] = [];

    constructor(
      private http: HttpClient
      ) {}


     getJSONData(): Observable<any> {
      return this.http.get<{id: string, title: string }[]>('assets/data.json').pipe(delay(2000));
    }
  }
        // Simula uma chamada assincrona com atraso de 2 segundos 
      