import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Animal } from '../animal';
import { MatPaginator } from '@angular/material/paginator';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css']
})
export class EditableComponent {
  dataSource?: MatTableDataSource<Animal>;
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns=['id','nev','faj','erkezes','helye','gondozo','műveletek'];
  pageSizes=[3,5,10,25,100];
  currentFilterKey="";
  
  onEdit(allat:Animal){
    this.router.navigate(['editable', 'edit', allat.id]);
  }

  onDelete(allat:Animal){
    this.base.delete(allat.id).subscribe({
      next:()=>{
        console.log("Sikeres Törlés"),
        this.base.get().subscribe((a)=>this.refresh(a))},
      error:(e)=>console.log(e)
  });
  }

  refresh(adatok:any){
    this.dataSource = new MatTableDataSource(adatok as Animal[]);
    this.dataSource.paginator=this.paginator;
    this.dataSource.filterPredicate=
    (data:any, filter:string)=>{
        const key= this.currentFilterKey || '';
        const source= key ? String(data[key]) : JSON.stringify(data);
        return source.toLowerCase().includes(filter);
    }
  }

  constructor(private base:BaseService, private router:Router){
    this.base.get().subscribe((a)=>this.refresh(a))
  }

  applyFilter(event:any){
    // const filterValue= event.target.value;
    const filterValue= event;
    if (this.dataSource)
      this.dataSource.filter=filterValue.trim().toLowerCase();
  }
}