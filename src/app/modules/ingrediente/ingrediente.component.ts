import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingrediente',
  standalone: true,
  templateUrl: './ingrediente.component.html',
  styleUrls: ['./ingrediente.component.scss'],
  imports:[ReactiveFormsModule, CommonModule]
})
export default class IngredienteComponent {
  @Output() eventEmitter = new EventEmitter<any>();
  ingredienteForm : FormGroup
  constructor(
    private fb : FormBuilder
  ) {
    this.ingredienteForm = this.fb.group(
      {
        nome:['']
      }
    )
  }

  onSubmit() {
    console.log("prima dell'emit")
    this.eventEmitter.emit(this.ingredienteForm.value.nome);
    console.log("dopo")
  }

  insertIngrediente(){
  }
}
