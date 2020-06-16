import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersListComponent } from './components/app/users-list/users-list.component';
import { TasksListComponent } from './components/app/tasks-list/tasks-list.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { CommonComponentsModule } from './components/common/common.module';
import { DeleteTaskDialogComponent } from './components/app/delete-task-dialog/delete-task-dialog.component';
import { EditTaskDialogComponent } from './components/app/edit-task-dialog/edit-task-dialog.component';
import { NewTaskDialogComponent } from './components/app/new-task-dialog/new-task-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserDialogComponent } from './components/app/new-user-dialog/new-user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    TasksListComponent,
    DeleteTaskDialogComponent,
    EditTaskDialogComponent,
    NewTaskDialogComponent,
    NewUserDialogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CommonComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
