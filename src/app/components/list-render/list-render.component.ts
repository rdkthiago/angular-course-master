import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { Car } from '../../Car';
import { ListService } from '../../services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  animals: Animal[] = [];

  cars: Car[] = [];

  animalDetails = '';
  showAge(animal: Animal) {
    this.animalDetails = `The pet ${animal.name} has ${animal.age}y old!`;
  }

  carDetails = '';
  showYear(car: Car) {
    this.carDetails = `This a ${car.brand} ${car.model} year is ${car.year}`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removing animal...');
    
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
