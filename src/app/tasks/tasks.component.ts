import { Component, Input } from '@angular/core';
import type { UserInterface } from '../models/user.interface';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../utils/dummyTasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { AddTaskInterface } from '../models/task.interface';

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

  get selectedUserTasks() {
    return this.tasks.filter((i) => i.userId === this.user.id);
  }

  completeTask(id: string) {
    this.tasks = this.tasks.filter((i) => i.id !== id);
  }

  showForm() {
    this.show = true;
  }

  hideForm() {
    this.show = false;
  }

  saveNewTask(newTask: AddTaskInterface) {
    let task = {
      id: Date.now().toString(),
      userId: this.user.id,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    };
    this.show = false;
    this.tasks.push(task);
  }
}
