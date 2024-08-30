import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-repository-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './repository-card.component.html',
  styleUrl: './repository-card.component.css',
})
export class RepositoryCardComponent {
  // Input property to receive repository information
  @Input() repo!: any;

  @Input() id!: any;
}
