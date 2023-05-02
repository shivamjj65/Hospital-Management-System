import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPxComponent } from './add-px.component';

describe('AddPxComponent', () => {
  let component: AddPxComponent;
  let fixture: ComponentFixture<AddPxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
