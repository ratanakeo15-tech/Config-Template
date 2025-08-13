import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reson } from './reson';

describe('Reson', () => {
  let component: Reson;
  let fixture: ComponentFixture<Reson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
