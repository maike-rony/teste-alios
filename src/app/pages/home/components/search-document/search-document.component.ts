import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { DocumentRequest, DocumentSuccess } from 'src/app/core/actions/document.actions';
import { AppState } from 'src/app/core/app.store';
import { selectDocument } from 'src/app/core/selectors/document.selectors';
import { SnackBarService } from 'src/app/core/services/snackbar.service';
import { GenericValidator } from 'src/app/core/validators/document.validator';

@Component({
  selector: 'app-search-document',
  templateUrl: './search-document.component.html',
  styleUrls: ['./search-document.component.scss']
})
export class SearchDocumentComponent implements OnInit, OnDestroy {

  @Output() clientData = new EventEmitter();

  public documentFormControl: FormGroup;
  private documentSubscription: any;
  public clientData$ = this.store.select(selectDocument);

  constructor(
    private store: Store<AppState>,
    private actions$: ActionsSubject,
    private formBuilder: FormBuilder,
    private snackBar: SnackBarService
  ) {
    this.documentFormControl = this.formBuilder.group({
      documentClient: [null]
    })
  }
  ngOnDestroy(): void {
    this.documentSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.getSubscriptionClientDataStore();
  }

  public validadeDocument(): boolean {
    const document = this.documentFormControl.get('documentClient')?.value;
    return GenericValidator.isValidCpfDocument(document);
  }

  public getSubscriptionClientDataStore(): void {
    this.documentSubscription = this.actions$
      .pipe(ofType(...[DocumentSuccess]))
      .subscribe((payload: any) => {
        if (payload.data.length > 0) {
          this.clientData.emit(payload.data[0]);
          this.documentFormControl.reset();
          return;
        }

        this.snackBar.error('Nenhum CPF Encontrado', 7000, 'Sair');
      })
  }

  public onSubmitDocument(): void {
    const document = this.documentFormControl.get('documentClient')?.value;
    this.store.dispatch(
      DocumentRequest({
        params: {
          documentNumber: document
        }
      })
    )
  }
}
