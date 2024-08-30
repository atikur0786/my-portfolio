import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RepositoryCardComponent } from '../repository-card/repository-card.component';
import { GithubService } from '../../services/github.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    MatIconModule,
    MatProgressBarModule,
    RepositoryCardComponent,
    RouterLink,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  // Input field for GitHub username
  username: string = '';

  // Error message to display when api thorows and error as well as username filed is empty
  errorMessage: string | undefined;

  // Array to store fetched repositories
  repositories: any[] = [];

  // Object to store user information fetched from GitHub
  userInfo: any;

  // Flag to control whether to display fetched data
  displayData: boolean = false;

  // Flag to control whether to display loader animation
  displayLoader: boolean = false;

  constructor(private githubService: GithubService) {
    this.username = 'atikur0786';
    // this.username = 'bue221';
  }

  ngOnInit(): void {
    this.fetchRepositories(this.username);
  }

  // Function to fetch repositories for the specified username
  async fetchRepositories(username: string) {
    try {
      // Fetch repositories using GitHub service
      this.repositories = await this.githubService.getRepositories(username);
      console.log(this.repositories);

      // Update flags to display data and hide loader
      this.displayLoader = false;
      this.displayData = true;
    } catch (error: any) {
      // Handle error while fetching repositories
      this.displayLoader = false;
      console.error('Error fetching repositories:', error);
      this.errorMessage = error;
    }
  }
}
