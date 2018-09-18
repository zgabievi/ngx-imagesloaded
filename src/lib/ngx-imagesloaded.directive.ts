import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import imagesLoaded from 'imagesloaded';
import { NgxImagesloadedOptions } from './ngx-imagesloaded-options';

@Directive({
  selector: '[imagesLoaded]'
})
export class NgxImagesloadedDirective implements OnInit, OnDestroy {
  //
  @Output()
  always: EventEmitter<imagesLoaded> = new EventEmitter();

  //
  @Output()
  done: EventEmitter<imagesLoaded> = new EventEmitter();

  //
  @Output()
  fail: EventEmitter<imagesLoaded> = new EventEmitter();

  //
  @Output()
  progress: EventEmitter<{
    instance: imagesLoaded;
    image: any;
  }> = new EventEmitter();

  //
  @Input()
  options: NgxImagesloadedOptions;

  //
  private instance: imagesLoaded;

  //
  constructor(private el: ElementRef) {}

  //
  ngOnInit() {
    this.instance = imagesLoaded(
      this.el.nativeElement,
      this.options,
      instance => {
        this.always.emit(instance);
      }
    );

    this.instance.on('always', instance => this.always.emit(instance));
    this.instance.on('done', instance => this.always.emit(instance));
    this.instance.on('fail', instance => this.always.emit(instance));
    this.instance.on('progress', (instance, image) =>
      this.always.emit({ instance, image })
    );
  }

  //
  ngOnDestroy() {
    this.instance.off('always', instance => this.always.emit(instance));
    this.instance.off('doffe', instance => this.always.emit(instance));
    this.instance.off('fail', instance => this.always.emit(instance));
    this.instance.off('progress', (instance, image) =>
      this.always.emit({ instance, image })
    );
  }
}
