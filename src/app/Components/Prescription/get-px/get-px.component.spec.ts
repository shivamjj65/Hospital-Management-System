import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPxComponent } from './get-px.component';

describe('GetPxComponent', () => {
  let component: GetPxComponent;
  let fixture: ComponentFixture<GetPxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
