import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkoutComponent} from './Workout/workout.component'
import {TrackWorkoutComponent} from './track-workout/track-workout.component'
import {AddCategoryComponent} from './add-category/add-category.component'
import {AddWorkoutComponent} from './add-workout/add-workout.component'
import {EditWorkoutComponent} from './edit-workout/edit-workout.component'
import {StartWorkoutComponent} from './start-workout/start-workout.component'
import {EndWorkoutComponent} from './end-workout/end-workout.component'

const routes: Routes = [
     
    { path: 'workout', component: WorkoutComponent },
    { path: 'addcategory', component: AddCategoryComponent },
    { path: 'addworkout', component: AddWorkoutComponent },
    { path: 'editworkout', component: EditWorkoutComponent },
    { path: 'startworkout', component: StartWorkoutComponent },
    { path: 'endworkout', component: EndWorkoutComponent },    
    { path: 'trackworkout', component: TrackWorkoutComponent },
    ]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],  
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
