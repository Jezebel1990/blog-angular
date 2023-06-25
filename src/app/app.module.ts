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
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './postList/home/home.component';
import { effects } from './postList/effects';


@NgModule({
  declarations: [
    AppComponent,
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
    StoreModule.forRoot({ }),
    EffectsModule.forRoot(effects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
