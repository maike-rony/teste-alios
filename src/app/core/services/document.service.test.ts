import { TestBed } from '@angular/core/testing';
import { ClientData } from '../interfaces/account.interface';
import { DocumentService } from './document.service';


describe('Document Service', () => {
  let service: DocumentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ DocumentService ]
    })
    .compileComponents();
  });

  it('should create array client data', () => {
    service.findDocument({ documentNumber: '10939339099'}).subscribe((data: ClientData[]) => {
      expect(data[0]).toEqual({
        document: '10939339099',
        name: 'Mariane Souza Oliveira',
        status: 'Regular',
        accountCobranded: '557932-4',
        accountNumber: '778461-8'
      })
    });
  });
});
