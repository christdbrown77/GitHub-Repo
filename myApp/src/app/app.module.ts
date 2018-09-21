import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    PhotosComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
