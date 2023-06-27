import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './postList/home/home.component';
import { PostListComponent } from './postList/components/post-list.component';



const routes: Routes = [
    { path: '', redirectTo:'home' , pathMatch: 'full'  },
    {path: 'home',component: HomeComponent},
    {path: 'post-list', component: PostListComponent},
    //  {path:'', redirectTo:'blogangular', component: PostListComponent}
    // { path: 'contact', component: ContactComponent },
    // { path: '**', component: PageNotFoundComponent } // Rota curinga para lidar com rotas inválidas
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
    // outros metadados do módulo
  })
  export class AppRoutingModule { }