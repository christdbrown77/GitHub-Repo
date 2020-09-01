import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImagesService {

  constructor(private http: Http) {
    console.log('Images service Initialized');
  }

  getImages() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(res => res.json());
  }
}
