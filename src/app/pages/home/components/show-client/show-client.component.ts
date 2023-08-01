import { Component, Input } from '@angular/core';
import { ClientData } from 'src/app/core/interfaces/account.interface';

@Component({
  selector: 'app-show-client',
  templateUrl: './show-client.component.html',
  styleUrls: ['./show-client.component.scss']
})
export class ShowClientComponent {

  @Input() clientData!: ClientData;

  constructor() { }
}
