import { TestBed } from '@angular/core/testing';

import { DialogResolverService } from './dialog-resolver.service';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('DialogResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MatDialogModule,
      RouterTestingModule.withRoutes([]),
    ],
    providers: [
      DialogResolverService,
    ],
  }));

  it('should be created', () => {
    const service: DialogResolverService = TestBed.get(DialogResolverService);
    expect(service).toBeTruthy();
  });
});
