import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Animal } from '../animal';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  dataSource?: MatTableDataSource<Animal>;
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns=['id','nev','faj','erkezes','helye','gondozo'];
  pageSizes=[3,5,10,25,100];
  constructor(private base:BaseService){
    this.base.get().subscribe(
      (adatok)=>{
        this.dataSource = new MatTableDataSource(adatok as Animal[]);
        this.dataSource.paginator=this.paginator;
      }
    )
  }
}
