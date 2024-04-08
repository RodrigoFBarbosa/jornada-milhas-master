import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from 'src/app/core/servicos/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  constructor(public dialog: MatDialog,
     public formBuscaService: FormBuscaService) {}

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '30%',
    }); // passo qual componente eu quero abrir no modal
  }
}

