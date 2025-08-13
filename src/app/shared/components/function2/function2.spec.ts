import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Function2 } from './function2';

describe('Function2', () => {
  let component: Function2;
  let fixture: ComponentFixture<Function2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Function2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Function2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
