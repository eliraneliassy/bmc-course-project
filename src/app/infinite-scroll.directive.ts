import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {

  @Output() bottomReached: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    const distance = this.getDistFromBottom();
    console.log(distance);
    if (distance < 20) {
      this.bottomReached.emit(true);
    }
  }

  getDistFromBottom() {

    const scrollPosition = window.pageYOffset;
    const windowSize = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    return Math.max(bodyHeight - (scrollPosition + windowSize), 0);

  }


}
