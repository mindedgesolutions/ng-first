import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { UserInterface } from '../models/user.interface';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  @Input() user?: UserInterface;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<UserInterface>();

  get imagePath() {
    return `assets/users/` + this.user?.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user);
  }
}
