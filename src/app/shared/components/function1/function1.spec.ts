import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Function1 } from './function1';

describe('Function1', () => {
  let component: Function1;
  let fixture: ComponentFixture<Function1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Function1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Function1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
