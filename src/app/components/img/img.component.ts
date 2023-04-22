import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() imgValueChild: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';

  constructor() { }

  ngOnInit(): void {
  }

  public imgError() {
    this.imgValueChild = this.imageDefault;
  }

  public imgLoaded() {
    console.log('log del hijo');
    //Cuando se carga correctamente quiero transmitir ese evento:
    this.loaded.emit(this.imgValueChild);
  }

}
