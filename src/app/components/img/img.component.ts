import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  imgValueChild: string = '';

  @Input('img') set changeImg(newImg: string) {
    this.imgValueChild = newImg;
    console.log('change just img =>', this.imgValueChild);
    //code
  }
  @Input() alt: string = '';


  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // before render
    // NO async -- once time
    console.log('constructor', 'imgValue =>' ,this.imgValueChild);

  }

  ngOnChanges(changes: SimpleChanges): void {
    // before - during render
    // changes inputs -- N times
    console.log('ngOnChanges', 'imgValue =>', this.imgValueChild);
    // console.log('changes', changes);
  }

  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.imgValueChild);
    // this.counterFn = window.setInterval(() => {
    //   this.counter++;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit(): void {
    // after render
    // handler children. Manejamos los hijos de este componente de forma
    // programatica y no desde el template (<ng-template>). Debido a que
    // este componente ya se encuentra renderizado. Generalmente se ejecutan directivas
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    // delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
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
