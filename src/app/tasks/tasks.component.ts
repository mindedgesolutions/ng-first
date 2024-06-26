import { Component, Input } from '@angular/core';
import type { UserInterface } from '../models/user.interface';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../utils/dummyTasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { AddTaskInterface } from '../models/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) user!: UserInterface;
  tasks = DUMMY_TASKS;
  show = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.user.id);
  }

  completeTask(id: string) {
    return this.taskService.removeTask(id);
  }

  showForm() {
    this.show = true;
  }

  hideForm() {
    this.show = false;
  }
}
