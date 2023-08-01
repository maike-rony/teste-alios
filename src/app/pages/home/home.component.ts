import { Component } from '@angular/core';
import { ClientData } from 'src/app/core/interfaces/account.interface';
import { ListIcons } from 'src/app/core/interfaces/icons.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public clientData!: ClientData;
  public listIcons: ListIcons[] = [
    {
      name: 'logo',
      path: '/assets/logo.png'
    },
    {
      name: 'itens',
      path: '/assets/itens.png'
    },
  ]

  constructor() { }

  public getClientData(event: ClientData): void {
    this.clientData = event;
  }

}
