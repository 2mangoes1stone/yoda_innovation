import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  allGoals: any;
  apiURL: string;
  team: string;
  currentGoalsID: string;
  addInProgress: boolean;
  addIterationInProgress: boolean;
  form: FormGroup;

  newIterationForm: FormGroup;

  goals: any;
  iterationNumber: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.title = 'Iteration Goals';
    this.color = '#ffbb00';
    this.addInProgress = false;
    this.addIterationInProgress = false;

    this.apiURL = 'http://localhost:8000/';

    this.form = new FormGroup({
      goalDesc: new FormControl(null)
    });

    this.newIterationForm = new FormGroup({
      iterationNumber: new FormControl(null)
    });

    this.login();
    this.getGoals();
  }

  saveStatus(goal): void {
    goal.done = !goal.done;
    this.updateGoals();

  }

  updateGoals(): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      'retroGoals': this.currentGoals
    };
    const url = this.apiURL + 'api/goals/' + this.currentGoalsID;

    this.http
      .patch(url, body, { headers })
      .subscribe((data) => { console.log(data); });

  }

  newGoalPressed(): void {
    this.addInProgress = true;
  }

  saveGoalPressed(): void {
    const desc = this.form.get('goalDesc').value;
    if (desc) {
      this.currentGoals.push({
        description: this.form.get('goalDesc').value,
        done: false
      });
      this.updateGoals();
      this.form.setValue({goalDesc: ''});
    }
    this.addInProgress = false;
  }

  deleteGoalPressed(goal): void {
    const goalPos = this.currentGoals.indexOf(goal);
    if (goalPos > -1) {
      this.currentGoals.splice(goalPos, 1);
      this.updateGoals();
    }
  }

  newIterationPressed(): void {
    this.addIterationInProgress = true;
  }

  saveIterationPressed(): void {
    const iterationNo = this.newIterationForm.get('iterationNumber').value;
    if (iterationNo) {
      this.addIterationInProgress = false;
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      const body = {
        'retroNumber': iterationNo,
        'retroGoals': []
      };
      let url = this.apiURL + 'api/goals';

      this.http
        .post(url, body, { headers })
        .subscribe((data) => {
          console.log(data);
          this.allGoals.push(
            {
              'todo': data._id
            }
          );
          const newBody = {
            'goals': this.allGoals
          };
          url = this.apiURL + 'api/teams/' + this.team;

          this.http.patch(url, newBody, { headers })
          .subscribe((response) => {
            this.getGoals();
          });
        });

      this.form.setValue({iterationNumber: ''});
    }
  }

  login(): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      'email': 'test@email.com',
      'password': 'test'
    };
    const url = this.apiURL + 'auth/login';

    this.http
      .post(url, body, { headers })
      .subscribe((data) => { console.log(data); });
  }

  getGoals(): void {
    const url = this.apiURL + 'api/teams/';

    this.http
      .get(url)
      .subscribe(
        data => {
          const recentGoals = data[0].goals.length - 1;
          this.currentGoals = data[0].goals[recentGoals].todo.retroGoals;
          // this.previousGoals = data[0].goals[recentGoals - 1].todo.retroGoals;
          this.iterationNumber = data[0].goals[recentGoals].todo.retroNumber;
          this.currentGoalsID = data[0].goals[recentGoals].todo._id;
          this.allGoals = data[0].goals;
          this.team = data[0]._id;
        },
        err => {
          console.log(err);
        }
      );
  }

}
