import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/types/house';
import { GoldenDeer } from 'src/app/data/houses/goldenDeer';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
  houses: House[];

  constructor() { }

  ngOnInit() {
    this.houses = [GoldenDeer, GoldenDeer];
  }

}
