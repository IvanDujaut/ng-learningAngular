import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() imgValueChild: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';

  constructor() {
    // before render
    // NO async -- once time
    console.log('constructor', 'imgValue =>' ,this.imgValueChild);

  }

  ngOnChanges(): void {
    // before - during render
    // changes inputs -- N times
    console.log('ngOnChanges', 'imgValue =>', this.imgValueChild);

  }

  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imgValue =>', this.imgValueChild);

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
