import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationGoalsComponent } from './iteration-goals.component';

describe('IterationGoalsComponent', () => {
  let component: IterationGoalsComponent;
  let fixture: ComponentFixture<IterationGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IterationGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterationGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
