import { Injectable } from '@angular/core';
import { Octokit } from 'octokit';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private octokit!: Octokit;

  constructor() {
    this.octokit = new Octokit({
      auth: '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',
    });
  }

  async getRepositories(username: string) {
    try {
      const response = await this.octokit.request(
        'GET /users/{username}/repos',
        {
          username: username,
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  }
}
