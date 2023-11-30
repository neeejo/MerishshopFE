import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import ProdottoComponent from '../prodotto/prodotto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-prodotti',
  standalone: true,
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.scss'],
  imports: [ProdottoComponent, ReactiveFormsModule, CommonModule, FormsModule]
})
export default class ListaProdottiComponent {
prodotti : any = this.activatedRoute.snapshot.data['prodotti'];
value : any;
isSelected : boolean = false;
//prodottiForm : FormGroup;
constructor (
  private activatedRoute : ActivatedRoute,
  //private fb : FormBuilder

) {
  /*this.prodottiForm = this.fb.group({
    
  })*/

}

select() {
  this.isSelected = true;
  console.log(this.isSelected);

}


ngOnInit() {

}

onSubmit() {
}

}
