import { Component } from '@angular/core';

@Component({
  selector: 'app-entry',
  template: `
    <div class="container">
      <span>I'm the remote app :)</span>
    </div>
  `,
  styles: [
    `
      .container {
        border: 1px solid green;
        padding: 24px;
      }
    `
  ]
})
export class RemoteEntryComponent {}
