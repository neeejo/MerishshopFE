import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProvaService } from "src/app/services/prova.service";
import ProvaComponent from "../prova/prova.component";

@Component({
  selector: "app-test",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ProvaComponent],
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export default class TestComponent {
  testForm: FormGroup;
  lista: any;

  constructor(
    private provaService: ProvaService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.testForm = this.fb.group({
      id: [""],
      prodotti: [""],
      quantita: [""],
      totale: [""],
    });
  }

  ngOnInit() {
    this.getDataFromResolver();
  }

  getDataFromResolver() {
    this.lista = this.activatedRoute.snapshot.data["test"];
    console.log(this.lista);
  }

  onSubmit() {
    if (this.testForm.valid) {
      //this.testForm.value.ordine.prodotti
      let ordine: any = {
        // prodotti : this.testForm.value.ordine.prodotti,
        ...this.testForm.value,
      };
      console.log("ciao");
      this.provaService.update(ordine).subscribe({
        next: (res) => {
          console.log(res.prodotti);
          this.router.navigateByUrl("gestionale");
        },
      });
    }
  }

  insertOrd(ordine:any) {
    this.provaService.insertOrd(ordine).subscribe(res=> {this.getDataFromResolver});

  }
}
