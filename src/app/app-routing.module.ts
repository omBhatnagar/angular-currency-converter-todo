import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoRootComponent } from './components/todo-root/todo-root.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'todo',
    component: TodoRootComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
