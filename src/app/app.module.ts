import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { postListReducer } from './postList/reducers/post-list.reducer';
import { PostListEffects } from './postList/effects/post-list.effects';
import { PostListComponent } from './postList/components/post-list.component';
import { CommonModule } from '@angular/common';
import { PostListSevice } from './postList/services/post-list.service';
import { HttpClientModule } from '@angular/common/http';
import {PostListModule} from '../../src/app/postList/postList.module';
import { HomeComponent } from './postList/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HomeComponent
   

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    PostListModule,
    StoreModule.forRoot({ }),
    EffectsModule.forRoot([PostListEffects]),
  ],
  providers: [PostListSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
