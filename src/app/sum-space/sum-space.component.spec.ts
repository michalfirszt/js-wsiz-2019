import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumSpaceComponent } from './sum-space.component';

describe('SumSpaceComponent', () => {
  let component: SumSpaceComponent;
  let fixture: ComponentFixture<SumSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
