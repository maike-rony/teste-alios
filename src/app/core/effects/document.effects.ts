import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { DocumentFailure, DocumentRequest, DocumentSuccess } from "../actions/document.actions";
import { DocumentService } from "../services/document.service";


@Injectable()
export class DocumentEffects {
  constructor(private actions$: Actions, private service: DocumentService) { }

  document$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentRequest),
      switchMap((params) =>
        this.service.findDocument(params).pipe(
          map((data) => DocumentSuccess({ data })),
          catchError(({ error }) => of(DocumentFailure(error)))
        )
      )
    ))
}
