import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddCategoryComponentComponent } from './add-category-component/add-category-component.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditWorkoutComponent } from './edit-workout/edit-workout.component';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { EndWorkoutComponent } from './end-workout/end-workout.component';
import { TrackWorkoutComponent } from './track-workout/track-workout.component';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponentComponent,
    AddCategoryComponent,
    EditWorkoutComponent,
    AddWorkoutComponent,
    StartWorkoutComponent,
    EndWorkoutComponent,
    TrackWorkoutComponent,
    WorkoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
