import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BarDto } from '@api/model/bar-dto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet/>',
})
export class AppComponent {
  protected readonly bar: BarDto = { type: '', authority: { name: '' } };

  constructor() {
    console.log(this.bar);
  }
}
