import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './mycomponents/todos/todos.component';
import { AboutComponent } from './mycomponents/about/about.component';
import { HomeComponent } from './mycomponents/home/home.component';

const routes: Routes = [
{path: 'your-todo', component: TodosComponent },
{path: '', component: HomeComponent },
{path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
