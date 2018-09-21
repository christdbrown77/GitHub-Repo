
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';
import { MoviesComponent } from './movies/movies.component';


const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'photos',
    component: PhotosComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
