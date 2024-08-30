import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { BlogsComponent } from './components/blogs/blogs.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: "Atikur's Home",
    component: HomeComponent,
  },
  {
    path: 'projects',
    title: "Atikur's Projects",
    component: ProjectsComponent,
  },
  {
    path: 'work-experience',
    title: "Atikur's Work Experience",
    component: WorkExperienceComponent,
  },
  // {
  //   path: 'blogs',
  //   title: "Atikur's Blog",
  //   component: BlogsComponent,
  // },
  {
    path: '**',
    title: 'Page Not Found',
    component: PageNotFoundComponent,
  },
];
