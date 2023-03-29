import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryConfig, GalleryModule, GalleryRef, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private gallery: Gallery) {}
  ngOnInit() {
    // Get the galleryRef by id
    const galleryRef = this.gallery.ref('myGallery');

    // Add items individually
    galleryRef.addImage({
      src: '../../../assets/home/rolex.jpg',
      thumb: '../../assets/home/rolex.jpg',
    });
    galleryRef.addImage({
      src: '../../../assets/home/rolex.jpg',
      thumb: '../../assets/home/trauringe.jpg',
    });

    // Or load a new set of items
    galleryRef.load([
      new ImageItem({
        src: '../../assets/home/rolex.jpg',
        thumb: '../../assets/home/rolex.jpg',
      }),
      new ImageItem({
        src: '../../assets/home/trauringe.jpg',
        thumb: '../../assets/home/trauringe.jpg',
      }),
      // ... more items
    ]);

    const config: GalleryConfig = {
      autoPlay: true,
      counter: false,
      playerInterval: 6000,
      loadingStrategy: 'preload',
      thumbPosition: 'top',
    };
   
    galleryRef.setConfig(config);
  }
}
