import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-iteration-goals',
  templateUrl: './iteration-goals.component.html',
  styleUrls: ['./iteration-goals.component.scss']
})
export class IterationGoalsComponent implements OnInit {
  title: string;
  color: string;
  currentGoals: any;
  previousGoals: any;

  constructor() { }

  ngOnInit() {
    this.title = 'Iteration Goals';
    this.color = '#ffbb00';

    this.currentGoals = {
      goals: [
        { id: 0, name: "A", complete: true },
        { id: 1, name: "B", complete: false },
        { id: 2, name: "C", complete: false },
        { id: 3, name: "D", complete: false },
      ]
    };

    this.previousGoals = {
      goals: [
        { id: 0, name: "A", complete: true },
        { id: 1, name: "B", complete: false },
        { id: 2, name: "C", complete: false },
        { id: 3, name: "D", complete: false },
      ]
    };
  }

  saveStatus(goal) {
    goal.complete = !goal.complete;
  }

  getCurrentGoals(): void {
    // fetch goals from API
  }

  getPreviousGoals(): void {
    // fetch goals from API
  }

}
