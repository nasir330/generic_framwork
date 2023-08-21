import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Steper1Component } from './steper1.component';

describe('Steper1Component', () => {
  let component: Steper1Component;
  let fixture: ComponentFixture<Steper1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Steper1Component]
    });
    fixture = TestBed.createComponent(Steper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
