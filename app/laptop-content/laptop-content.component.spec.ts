import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopContentComponent } from './laptop-content.component';

describe('LaptopContentComponent', () => {
  let component: LaptopContentComponent;
  let fixture: ComponentFixture<LaptopContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
