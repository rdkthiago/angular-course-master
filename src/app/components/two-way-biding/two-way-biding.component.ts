import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-biding',
  templateUrl: './two-way-biding.component.html',
  styleUrl: './two-way-biding.component.css'
})
export class TwoWayBidingComponent {
  name: string = '';
  password: string = '';
}
