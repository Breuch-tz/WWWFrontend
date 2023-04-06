import { Component } from '@angular/core';
import { GetService } from 'src/app/mongo/get/get.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  constructor(public get: GetService) {}

  ngOnInit() {
    this.get.getData().subscribe();
  }
  ngOnChanges() {}
}
