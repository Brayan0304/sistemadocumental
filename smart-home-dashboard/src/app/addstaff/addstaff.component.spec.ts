import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstaffComponent } from './addstaff.component';

describe('AddstaffComponent', () => {
  let component: AddstaffComponent;
  let fixture: ComponentFixture<AddstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddstaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
