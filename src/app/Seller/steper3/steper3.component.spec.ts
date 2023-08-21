import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Steper3Component } from './steper3.component';

describe('Steper3Component', () => {
  let component: Steper3Component;
  let fixture: ComponentFixture<Steper3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Steper3Component]
    });
    fixture = TestBed.createComponent(Steper3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
