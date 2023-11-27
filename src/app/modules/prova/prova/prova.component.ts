import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import TestComponent from "../test/test.component";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-prova",
  standalone: true,
  imports: [
    RouterModule,
    TestComponent,
    ReactiveFormsModule,
  ],
  templateUrl: "./prova.component.html",
  styleUrls: ["./prova.component.scss"],
})
export default class ProvaComponent {
  @Input() ordine: any;
  @Output() eventEmitter = new EventEmitter<any>();

  ordineForm: FormGroup;

  constructor(
    private fb: FormBuilder
    ) {
    this.ordineForm = this.fb.group({
      prodotti: [''],
      quantita: [''],
      totale: [''],
    });
  }

  onSubmit() {
    this.eventEmitter.emit(this.ordineForm.value);
  }
}
