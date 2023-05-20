import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterial';
  menuItems:any;
  constructor(private config:ConfigService){
    this.menuItems=this.config.menuItems;
  }
}
