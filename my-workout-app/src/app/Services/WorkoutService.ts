
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService} from './BaseService'

@Injectable()
export class WorkoutService {

    
	constructor(private baseService:BaseService){}
      
    getWorkoutData(params): Observable<any> {
        return this.baseService.getViaParam("assets/Data/WorkoutsData.json",{});
    }
}