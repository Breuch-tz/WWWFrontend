import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DeleteService } from 'src/app/mongo/delete/delete.service';
import { GetService } from 'src/app/mongo/get/get.service';
import { PostService } from 'src/app/mongo/post/post.service';
import { UpdateService } from 'src/app/mongo/update/update.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public inputValues: inputValuesOnSelect[] = [
    { id: '', header: '', subHeader: '', message: '',search:'' },
  ];

  constructor(
    public snackBar: MatSnackBar,
    public get: GetService,
    public post: PostService,
    public remove: DeleteService,
    public update: UpdateService
  ) {}

  ngOnInit() {
    this.get.getData().subscribe();

    this.refreshList();
  }

  public searchData(searchValue:String){
    console.log(searchValue);
    
    
    
  }

  public refreshList() {
    this.post.refreshList.subscribe((res) => {
      this.get.getData().subscribe();
    });
    this.remove.refreshList.subscribe((res) => {
      this.get.getData().subscribe();
    });
    this.update.refreshList.subscribe((res) => {
      this.get.getData().subscribe();
    });
  }

  public resetForm(postFormReset:any){
    postFormReset.resetForm()
    // this.resetInputValues()
  //  console.log(postFormReset.value.pHeader)
  }

  public resetInputValues() {
    this.inputValues[0].id = '';
    this.inputValues[0].header = '';
    this.inputValues[0].subHeader = '';
    this.inputValues[0].message = '';
    this.inputValues[0].search = '';;
  }

  public openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.panelClass = ['custom-snackbar'];
    config.horizontalPosition = 'start';
    config.verticalPosition = 'bottom';
    config.duration = 4000;
    this.snackBar.open(message, '', config);
  }

  public async createPost(postForm: {
    pId: String;
    pHeader: String;
    pSubheader: String;
    pMessage: String;
    pDate: String;
  }) {
    postForm.pDate = new Date().toISOString().slice(0, 10);

    if (postForm.pId == '' || postForm.pId == 'null' || postForm.pId == null) {
      this.openSnackBar('Erstellt');
      this.post.createPost(postForm).subscribe();
    } else {
      this.openSnackBar('Aktualisiert');
      this.update.createPost(postForm).subscribe();
    }
  }

  public deletePost(item: any) {
    this.remove.deleteData(item._id).subscribe();
  }

  public selectItem(item: any) {
    // console.log(item);
    this.inputValues[0].id = item._id;
    this.inputValues[0].header = item.header;
    this.inputValues[0].subHeader = item.subHeader;
    this.inputValues[0].message = item.description;
    this.inputValues[0].search = item.header;
  }
}

export interface inputValuesOnSelect {
  id: String;
  header: String;
  subHeader: String;
  message: String;
  search:String
}
