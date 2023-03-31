import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewdialogComponent } from './overviewdialog.component';

describe('OverviewdialogComponent', () => {
  let component: OverviewdialogComponent;
  let fixture: ComponentFixture<OverviewdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
