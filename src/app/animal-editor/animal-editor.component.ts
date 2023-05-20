import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-editor',
  templateUrl: './animal-editor.component.html',
  styleUrls: ['./animal-editor.component.css']
})
export class AnimalEditorComponent {
  allat:any;
  displayedColumns=['nev','faj','helye','gondozo'];

onSubmit(){
  // console.log(this.allat);
  // console.log("Érkezés:", this.allat['erkezes']);

  const theDate= new Date(Date.parse(this.allat['erkezes']));
  this.allat['erkezes'] = theDate.toLocaleDateString().replaceAll(". ","-").substring(0,10);
  
  this.base.update(this.allat.id,this.allat).subscribe(
    ()=> {return history.back()}
  );
}

 constructor(private base:BaseService, private ar:ActivatedRoute ){
  this.ar.params.subscribe(
    (p)=>this.base.get(p['id']).subscribe(
      (a)=>{ this.allat=a; console.log(this.allat)}
    )
  )
 }

formatLabel(value:number){
  if (value>=1000)
    return Math.round(value/1000)+'k'
  return `${value}`;
}
}
