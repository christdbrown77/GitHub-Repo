import { ImagesService } from './../images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  providers: [ImagesService],
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  images = [];

  constructor(private imagesService: ImagesService) {
    this.imagesService.getImages().subscribe(images => {
      console.log(images);
      this.images = images;
    });
  }

  ngOnInit() {
  }

}
