import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLunchComponent } from './team-lunch.component';

describe('TeamLunchComponent', () => {
  let component: TeamLunchComponent;
  let fixture: ComponentFixture<TeamLunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamLunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
