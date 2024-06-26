import { Component, Input } from '@angular/core';
import type { UserInterface } from '../models/user.interface';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../utils/dummyTasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) user!: UserInterface;
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((i) => i.userId === this.user.id);
  }

  completeTask(id: string) {
    this.tasks = this.tasks.filter((i) => i.id !== id);
  }
}
