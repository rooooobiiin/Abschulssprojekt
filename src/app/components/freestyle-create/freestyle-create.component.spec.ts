import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreestyleCreateComponent } from './freestyle-create.component';

describe('FreestyleCreateComponent', () => {
  let component: FreestyleCreateComponent;
  let fixture: ComponentFixture<FreestyleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreestyleCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreestyleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
