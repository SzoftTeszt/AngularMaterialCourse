import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Animal } from '../animal';
import { MatPaginator } from '@angular/material/paginator';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  dataSource?: MatTableDataSource<Animal>;
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns=['id','nev','faj','erkezes','helye','gondozo'];
  pageSizes=[3,5,10,25,100];
  currentFilterKey="";
  constructor(private base:BaseService){
    this.base.get().subscribe(
      (adatok)=>{
        this.dataSource = new MatTableDataSource(adatok as Animal[]);
        this.dataSource.paginator=this.paginator;

        this.dataSource.filterPredicate=
        (data:any, filter:string)=>{
            const key= this.currentFilterKey || '';
            const source= key ? String(data[key]) : JSON.stringify(data);
            return source.toLowerCase().includes(filter);
        }
      }
    )
  }

  applyFilter(event:any){
    // const filterValue= event.target.value;
    const filterValue= event;
    if (this.dataSource)
      this.dataSource.filter=filterValue.trim().toLowerCase();
  }
}
