import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch:'full'},
  {path: '**' , redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes) , HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
