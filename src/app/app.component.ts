import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';//https://source.unsplash.com/random

  public onLoaded(img: string) {
    console.log('log padre', img);

  }
}
