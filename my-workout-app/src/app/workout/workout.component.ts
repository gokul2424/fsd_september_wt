import { Component, OnInit } from '@angular/core';
import {WorkoutService} from '../Services/WorkoutService'

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  constructor(public workoutService:WorkoutService ) { }
  workoutDataArr: Array<any>;
  ngOnInit() {

  this.workoutService.getWorkoutData("").subscribe(data => 
    {
      console.log(data);
      this.workoutDataArr = data.workoutList;
  });

  }

}
