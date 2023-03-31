import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorieDialogComponent } from './kategorie-dialog.component';

describe('KategorieDialogComponent', () => {
  let component: KategorieDialogComponent;
  let fixture: ComponentFixture<KategorieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategorieDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KategorieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
