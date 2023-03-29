import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { TodoRootComponent } from './components/todo-root/todo-root.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/todo',
    pathMatch: 'full',
  },
  {
    path: 'todo',
    component: TodoRootComponent,
  },
  {
    path: 'converter',
    component: CurrencyConverterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
