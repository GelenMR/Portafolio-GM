import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { skills } from '../models/skills';
import { myskills } from '../models/myskills';

// import { project } from '../models/project';
// import { projects } from '../projects-list';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  getSkills(): Observable<skills[]> {
    return of(myskills);
  }
  // getProjects(): Observable<project[]> {
  //   return of(projects);
  // }
}
