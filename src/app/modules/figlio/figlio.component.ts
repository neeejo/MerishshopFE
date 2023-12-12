import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-figlio",
  standalone: true,
  templateUrl: "./figlio.component.html",
  styleUrls: ["./figlio.component.scss"],
  imports: [FormsModule, CommonModule],
})
export default class FiglioComponent {
  @Input() selected: any;
  @Output() mandaProdotto = new EventEmitter<any>();
  prodotti = this.activatedRoute.snapshot.data["prodotti"];
  singleselec: any;
  lista: any[] = [];
  constructor(private activatedRoute: ActivatedRoute) {}
  output() {}
  inviaLista() {
    console.log(this.lista);
    this.mandaProdotto.emit(this.lista);
  }
  selection() {
    this.lista.push(this.singleselec);
    console.log(this.lista);
  }

}
