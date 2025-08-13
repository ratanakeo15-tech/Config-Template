import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Function3 } from './function3';

describe('Function3', () => {
  let component: Function3;
  let fixture: ComponentFixture<Function3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Function3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Function3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
