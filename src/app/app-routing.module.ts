import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './postList/home/home.component';




const routes: Routes = [
    { path: '', component: HomeComponent , pathMatch: 'full'  }, // Redireciona para a rota '/home'
 
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