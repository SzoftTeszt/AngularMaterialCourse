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

 constructor(private base:BaseService, private ar:ActivatedRoute ){
  this.ar.params.subscribe(
    (p)=>this.base.get(p['id']).subscribe(
      (a)=>{ this.allat=a; console.log(this.allat)}
    )
  )
 }


}
