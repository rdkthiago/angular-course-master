import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: String = 'Thiago';
  year: number = 2024;
  job: String = 'programmer';
  
  contructor() {}

  ngOnInit() : void {

  }
}
