import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../interface/cars.interface';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  @Input() car: Car;

}
