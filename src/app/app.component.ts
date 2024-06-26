import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './utils/dummyUsers';
import { TasksComponent } from './tasks/tasks.component';
import { UserInterface } from './models/user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  user = <UserInterface>{};

  onSelectUser(user: UserInterface) {
    this.user = user;
  }
}
