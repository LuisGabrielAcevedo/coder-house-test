import { Component, OnInit } from '@angular/core';
import { Tasks } from '@/models/tasks';
import { ITask, ITasksResponse, IUser, IUsersResponse } from '@/interfaces';
import groupBy from 'lodash/groupBy';
import { Users } from '@/models/users';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  public loading = false;
  public tasks: ITask[] = [];
  public users: IUser[] = [];
  public formattedTasks: { [key: string]: any } = {};
  public dialog1 = false;
  public dialog2 = false;
  public taskToEdit: ITask | null = null;
  public dialog3 = false;
  public taskToDelete: ITask | null = null;
  constructor() {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.loading = true;
    // Search users
    const respUsers: IUsersResponse = await Users.find();
    this.users = respUsers.data;
    // Search tasks
    this.getTasks();
  }

  async getTasks() {
    this.loading = true;
    this.formattedTasks = {};
    const respTasks: ITasksResponse = await Tasks.find();
    this.tasks = respTasks.data;

    const taskByUser = groupBy(this.tasks, (task) =>
      task.assignedTo && typeof task.assignedTo === 'object'
        ? task.assignedTo._id
        : task.assignedTo
    );

    Object.keys(taskByUser).forEach((key) => {
      if (taskByUser[key]) {
        const tasks: { [key: string]: any } = {};
        const tasksByState = groupBy(taskByUser[key], (task) => task.state);
        tasks.CREATED = tasksByState.CREATED || [];
        tasks.ASSIGNED = tasksByState.ASSIGNED || [];
        tasks.IN_PROGRESS = tasksByState.IN_PROGRESS || [];
        tasks.COMPLETED = tasksByState.COMPLETED || [];
        this.formattedTasks[key] = tasks;
      }
    });
    this.loading = false;
  }

  getTask(userId: string, state: string) {
    return this.formattedTasks[userId]
      ? this.formattedTasks[userId][state]
      : [];
  }
}
