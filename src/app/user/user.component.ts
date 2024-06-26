import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { UserInterface } from '../models/user.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user?: UserInterface;
  @Output() select = new EventEmitter<UserInterface>();

  get imagePath() {
    return `assets/users/` + this.user?.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user);
  }
}
