import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Steper2Component } from './steper2.component';

describe('Steper2Component', () => {
  let component: Steper2Component;
  let fixture: ComponentFixture<Steper2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Steper2Component]
    });
    fixture = TestBed.createComponent(Steper2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
