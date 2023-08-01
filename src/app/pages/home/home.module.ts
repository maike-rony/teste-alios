import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderModule } from 'src/app/shared/header/header.module';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';
import { SearchDocumentComponent } from './components/search-document/search-document.component';
import { ShowClientComponent } from './components/show-client/show-client.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchDocumentComponent,
    ShowClientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderModule,
    SidebarModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR'
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
