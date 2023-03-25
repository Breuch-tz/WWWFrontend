import { Component, HostListener } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public SidenavToggleStatus: boolean = true;
  public Mobilesize: boolean = true;

  public ScreenWidth!: Number;

  constructor(public meta: Meta) {
    this.onResize();
  }
  ngOnInit() {
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Herzlich willkommen bei Puls der Zeit j Juwelier Breuch. Trauringe, Uhren und Schmuck mit Top Beratung und Preisen.',
      },
      {
        name: 'keywords',
        content:
          'Trauringe, Uhren, Schmuck, Revision, Ohrlochstechen, Uhrmachermeister, Goldschmiede',
      },
      { name: 'robots', content: 'index' },
    ]),
      6000;
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event?: undefined) {
    this.ScreenWidth = window.innerWidth;
    if (this.ScreenWidth <= 767) {
      this.Mobilesize = false;
    }
    if (this.ScreenWidth > 767) {
      this.Mobilesize = true;
    }
  }

  public sidenavToggle() {
    this.SidenavToggleStatus = !this.SidenavToggleStatus;
  }
  public sidenavClose() {
    if (!this.SidenavToggleStatus) this.SidenavToggleStatus = true;
  }

  public onActivate() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    this.SidenavToggleStatus = true;
  }
}
