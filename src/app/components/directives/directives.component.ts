import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent implements OnInit{
  size = 40;
  font = 'Arial';
  color = 'red';
  background = 'blue';
  
  contructor() {}

  ngOnInit() : void {

  }
}
