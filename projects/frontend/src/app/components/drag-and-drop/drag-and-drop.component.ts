import { Component, Input, NgZone, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {
  private globalDraggingInProgress: boolean = false;
  private readonly globalDragStartListener: () => void;
  private readonly globalDragEndListener: () => void;

  constructor(private zone: NgZone,
    private renderer: Renderer2) {
    this.globalDragStartListener = this.renderer.listen('document', 'dragstart', (evt: Event) => {
      this.globalDraggingInProgress = true;
    });
    this.globalDragEndListener = this.renderer.listen('document', 'dragend', (evt: Event) => {
      this.globalDraggingInProgress = false;
    });

  }

  private _disabled: boolean = false;

  public get disabled(): boolean { return this._disabled; }

  @Input()
  public set disabled(value: boolean) {
    this._disabled = (value != null && `${value}` !== 'false');
  }

  private isDropzoneDisabled(): boolean {
    return (this.globalDraggingInProgress || this.disabled);
  }

  ngOnInit(): void {
  }

}
