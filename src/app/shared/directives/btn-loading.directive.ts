import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[btnLoading]'
})
export class BtnLoadingDirective implements OnChanges {

  originalHtmlText = null;
  @Input() loading = false;
  constructor(private el: ElementRef) {
    this.originalHtmlText = this.el.nativeElement.innerHTML;
  }


  private setData() {
    if (this.loading) {
      this.originalHtmlText = this.el.nativeElement.innerHTML;
      this.el.nativeElement.innerHTML = 'Loading....'
    } else if (this.originalHtmlText) {
      this.el.nativeElement.innerHTML = this.originalHtmlText;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.loading) {
      this.setData();
    }
  }
}
