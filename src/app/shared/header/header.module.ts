import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR'
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderModule { }
