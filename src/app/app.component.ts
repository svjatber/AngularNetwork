import {Component, OnInit} from '@angular/core';
import {Cars} from './services/cars.service';
import {Car} from './interface/cars.interface';
import {UserService} from './user.service';
import {User} from './interface/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cars: Car[] = Cars;
  users: User[] = [];

  constructor(private usersService: UserService) { }

  ngOnInit(){
    this.usersService.getUsers().subscribe((value) => this.users = value);
  }

}
