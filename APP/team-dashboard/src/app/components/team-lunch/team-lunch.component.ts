import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlatpickrOptions } from 'ng2-flatpickr/ng2-flatpickr';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-team-lunch',
  templateUrl: './team-lunch.component.html',
  styleUrls: ['./team-lunch.component.scss']
})
export class TeamLunchComponent implements OnInit {
  title: string;
  color: string;
  lunch: any;
  addInProgress: boolean;
  datePickerOptions: FlatpickrOptions;
  place: string;
  date: string;
  form: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.title = 'Team Lunch';
    this.color = '';
    this.addInProgress = false;

    let date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(12);
    date.setMinutes(0);

    this.datePickerOptions = {
      enableTime: true,
      altInput: true,
      altInputClass: 'dateInput'
    };

    this.form = new FormGroup({
      place: new FormControl(null),
      date: new FormControl(null)
    });

  }

  addLunchPressed(): void {
    this.addInProgress = true;
    console.log(this.place);
    this.lunch = {
      place: this.form.get('place').value,
      date: this.form.get('date').value,
      booked: false
    }
  }

  dateHasPassed(): boolean {
    if (this.lunch) {
      return new Date(this.lunch.date) < new Date();
    }
    return false;
  }

}
