import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {

  dataSource: Observable<any>;
  displayedColumns=['id','nev','faj','erkezes','helye','gondozo']
  constructor(private base:BaseService){
    this.dataSource=this.base.get();
  }
}
