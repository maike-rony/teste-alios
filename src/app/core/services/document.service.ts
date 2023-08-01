import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClientData } from 'src/app/core/interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  findDocument({ params }: any): Observable<any> {
    const mock = [{
      document: '10939339099',
      name: 'Mariane Souza Oliveira',
      status: 'Regular',
      accountCobranded: '557932-4',
      accountNumber: '778461-8'
    }];

    const findDocument = mock.filter((item: ClientData) => item.document === params.documentNumber);

    if (findDocument.length > 0) {
      return of(mock);
    }

    return of([]);
  }
}
