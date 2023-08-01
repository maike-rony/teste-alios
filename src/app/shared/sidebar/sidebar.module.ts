import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR'
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidebarModule { }
