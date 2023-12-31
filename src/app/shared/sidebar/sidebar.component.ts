import { Component, Input } from '@angular/core';
import { ListIcons } from 'src/app/core/interfaces/icons.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() public listIcons!: ListIcons[];

  constructor() { }

}
