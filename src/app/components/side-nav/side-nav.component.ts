import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { House } from 'src/app/types/house';
import { GoldenDeer } from 'src/app/data/houses/goldenDeer';
import { BlackEagles } from '../../data/houses/blackEagles';
import { BlueLions } from '../../data/houses/blueLions';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  houses: House[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.houses = [GoldenDeer, BlackEagles, BlueLions];
  }
}
