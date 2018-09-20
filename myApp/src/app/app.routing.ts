import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { PhotosComponent } from './photos/photos.component';


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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
