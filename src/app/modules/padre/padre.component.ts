import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProvaService } from 'src/app/services/prova.service';
import FiglioComponent from '../figlio/figlio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-padre',
  standalone: true,
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss'],
  imports: [FiglioComponent, CommonModule, ReactiveFormsModule, FormsModule]
})
export default class PadreComponent {
  listaProdotti : any; 
  ordineForm : FormGroup;
  selected : any;
  singleselec : any;
  constructor(
    private activatedRoute : ActivatedRoute,
    private service : ProvaService,
    private fb : FormBuilder,
    
  ) {
    this.ordineForm = this.fb.group({
      prodotti : [[]],
      quantita : ['']
    })
    
  }
ngOnInit() {
  
  
}

getLista(items : any ) {
  this.listaProdotti=items;
  console.log(this.listaProdotti)
}

onSubmit() {
  console.log(this.listaProdotti)
  this.ordineForm.patchValue({prodotti : this.listaProdotti})
  console.log(this.ordineForm.value)
  this.service.insertOrd(this.ordineForm.value).subscribe(res=> {location.reload})
}

  insert(item : any) {
    
  }
}
