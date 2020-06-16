import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';
import { UsersListComponent } from './components/app/users-list/users-list.component';
import { TasksListComponent } from './components/app/tasks-list/tasks-list.component';
export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'tasks',
    component: TasksListComponent,
  },
];
