import { Component, Input } from '@angular/core';
import { House } from 'src/app/types/house';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent {
  @Input() house: House;
}
