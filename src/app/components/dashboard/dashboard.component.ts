import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { GetService } from 'src/app/mongo/get/get.service';
import { PostService } from 'src/app/mongo/post/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(
    public snackBar: MatSnackBar,
    public get: GetService,
    public post: PostService
  ) {}

  openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.panelClass = ['custom-snackbar'];
    config.horizontalPosition = 'start';
    config.verticalPosition = 'bottom';
    config.duration = 3000;
    this.snackBar.open(message, '', config);
  }

  public async createPost(
    postForm: {
      pHeader: String;
      pSubheader: String;
      pMessage: String;
      pDate: String;
    },
    postFormReset: any
  ) {
    postForm.pDate = new Date().toISOString().slice(0, 10);
    this.post.onPostCreate(postForm).subscribe();
    postFormReset.resetForm();
    this.openSnackBar('Post erstellt');
  }
  ngOnInit() {
    this.get.getData().subscribe();
    this.post.refreshList.subscribe((res) => {
      this.get.getData().subscribe();
    });
  }
}
