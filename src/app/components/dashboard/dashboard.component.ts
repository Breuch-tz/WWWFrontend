import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DeleteService } from 'src/app/mongo/delete/delete.service';
import { GetService } from 'src/app/mongo/get/get.service';
import { PostService } from 'src/app/mongo/post/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public inputValues: inputValuesOnSelect[] = [
    { id: '', header: '', subHeader: '', message: '' },
  ];

  constructor(
    public snackBar: MatSnackBar,
    public get: GetService,
    public post: PostService,
    public remove: DeleteService
  ) {}

  ngOnInit() {
    this.get.getData().subscribe();

    this.post.refreshList.subscribe((res) => {
      this.get.getData().subscribe();
    });
    this.remove.refreshList.subscribe((res) => {
      this.get.getData().subscribe();
    });
  }

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
      pId: String;
      pHeader: String;
      pSubheader: String;
      pMessage: String;
      pDate: String;
    },
    postFormReset: any
  ) {
    postForm.pDate = new Date().toISOString().slice(0, 10);
    this.openSnackBar('Post erstellt');

    this.post.createPost(postForm).subscribe();

    postFormReset.resetForm();
  }

  public deletePost(item: any) {
    this.remove.deleteData(item._id).subscribe();
  }

  public selectItem(item: any) {
    console.log(item);

    this.inputValues[0].id = item._id;
    this.inputValues[0].header = item.header;
    this.inputValues[0].subHeader = item.subHeader;
    this.inputValues[0].message = item.description;
  }
}

export interface inputValuesOnSelect {
  id: String;
  header: String;
  subHeader: String;
  message: String;
}
