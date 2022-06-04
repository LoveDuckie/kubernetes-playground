import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]'
})
export class DragAndDropDirective {
  @Output() onFileDropped = new EventEmitter<any>();
  
  constructor() { }
  @HostListener('dragover', ['$event']) 
  public onDragOver(event: any): any {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) 
  public onDragLeave(event: any): any {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event']) 
  public onDrop(event: any): any {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }
}
