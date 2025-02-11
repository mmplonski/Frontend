import { TestBed } from '@angular/core/testing';

import { AdminConfrimDialogService } from './admin-confrim-dialog.service';

describe('AdminConfrimDialogService', () => {
  let service: AdminConfrimDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminConfrimDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
