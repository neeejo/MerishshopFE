import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RicettaService } from 'src/app/services/ricetta.service';
import IngredienteComponent from '../ingrediente/ingrediente.component';

@Component({
  selector: 'app-ricetta',
  standalone: true,
  templateUrl: './ricetta.component.html',
  styleUrls: ['./ricetta.component.scss'],
  imports:[CommonModule, ReactiveFormsModule, IngredienteComponent ]
})
export default class RicettaComponent {
ricette : any = this.activatedRoute.snapshot.data['ricette'];
ricettaForm : FormGroup;
constructor(
  private activatedRoute : ActivatedRoute,
  private fb : FormBuilder,
  private service : RicettaService
) {
this.ricettaForm = this.fb.group(
  {
    nome : [''],
    ingredienti : [['']],
  }
)
}
ngOnInit() {
 
}



onSubmit() {
  this.service.insert(this.ricettaForm.value).subscribe(res => {location.reload()});
}
insertIngrediente(payload : any) {
  let s : string = payload;
  console.log(s);
  let ingredienti = s.replace(/\s/g,'').split(',');
  console.log(ingredienti);
  let ingObj = [];
  for(let i of ingredienti) {
    ingObj.push({nome : i});
  }
  this.ricettaForm.patchValue({ingredienti: ingObj });

}

}
