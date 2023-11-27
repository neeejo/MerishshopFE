import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProvaService } from 'src/app/services/prova.service';

@Component({
  selector: 'app-prodotto',
  standalone: true,
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.scss'],
  imports: [ReactiveFormsModule, CommonModule]
})
export default class ProdottoComponent {
@Output() eventEmitter = new EventEmitter<any>();
@Input() data : any;
prodottoForm: FormGroup
constructor(
private fb:FormBuilder,
private provaService : ProvaService
){
this.prodottoForm = this.fb.group({
  id: [''],
  nome : [''],
  tipologia : [''],
  prezzo: ['']
  //negozio: ['']
})
}
ngOnInit() {

}
onSubmit() {
console.log("prima dell'emit");
//let item = this.provaService.readProdotto(this.prodottoForm.value.id).subscribe(res => {this.prodottoForm.patchValue({negozio: res.negozio})});
console.log(this.prodottoForm.value);
this.provaService.updateProdotto(this.prodottoForm.value).subscribe(res=> {location.reload()});
}



}
