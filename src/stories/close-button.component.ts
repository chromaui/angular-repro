import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'ui-core-close-button',
  styles: [
    `
      button {
        background: rgba(255, 255, 255, 0.85);
        border: none;
        border-radius: 50%;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.07);
        height: 25px;
        width: 25px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        i.material-icons {
          font-size: 16px;
        }
      }
    `,
  ],
  template: `<button
    class="fs-unmask"
    type="button"
    [attr.aria-label]="text.closeButtonAriaLabel"
    [style.top]="top + 'px'"
    [style.right]="right + 'px'"
    (click)="close($event)"
  >
    <i class="material-icons" aria-hidden="true">close</i>
  </button>`,
  // styleUrls: ['./close-button.component.scss'],
})
export class CloseButtonComponent {
  /**
   * The absolute "top" position of the button.
  */
  @Input()
  top: number = 0;

  /**
   * The absolute "right" position of the button.
   */
  @Input()
  right: number = 0;

  /**
   * Emits the DOM Event when the close button is clicked.
   */
  @Output()
  onClose = new EventEmitter<Event>();
  public text = { closeButtonAriaLabel: 'Close' };
  close(event: Event): void {
    this.onClose.emit(event);
  }
}
